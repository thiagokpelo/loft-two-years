import React, {
  forwardRef,
  ForwardRefExoticComponent,
  useCallback,
  useRef,
  useState,
} from "react";
import mergeImages from "merge-images";

import { WebcamFixed, Wrapper } from "./Webcam.styles";
import { Button, Link } from "../Button";

const videoConstraints = {
  width: 435,
  height: 554,
  facingMode: "user",
};

// eslint-disable-next-line react/display-name
export const Webcam: ForwardRefExoticComponent<any> = forwardRef((_, ref) => {
  const webcamRef = useRef(null);
  const [image, setImageSrc] = useState("");

  const mergeCapture = async (picture: string) => {
    try {
      const r = await mergeImages(
        [
          {
            src: picture,
            x: 0,
            y: 0,
          },
          {
            src:
              "https://res.cloudinary.com/thiagokpelo/image/upload/c_scale,w_178/v1598391872/LOFT_jq1mef.png",
            x: 32,
            y: 0,
          },
        ],
        { format: "image/jpeg", quality: 0.9, crossOrigin: "anonymous" } as any
      );

      return r;
    } catch (e) {
      console.log(e);
      return "";
    }
  };

  const capture = useCallback(async () => {
    const response = webcamRef.current
      ? // @ts-ignore
        webcamRef.current.getScreenshot()
      : null;

    const merge = await mergeCapture(`data:image/jpeg;base64${response}`);

    console.log("merge", merge);

    setImageSrc(merge);
  }, [webcamRef]);

  return (
    <>
      <Wrapper ref={ref}>
        <WebcamFixed
          audio={false}
          height={554}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={435}
          videoConstraints={videoConstraints}
        />
        <Button onClick={capture} variant="solid">
          Tirar foto
        </Button>
        {image && (
          <Link download="FILENAME.jpeg" href={image}>
            Download
          </Link>
        )}
      </Wrapper>
    </>
  );
});
