import React, {
  forwardRef,
  ForwardRefExoticComponent,
  useCallback,
  useRef,
  useState,
} from "react";

import { Preview, WebcamFixed, Wrapper } from "./Webcam.styles";
import { Button, Link } from "../Button";
import { videoConstraints } from "./constants";
import {
  createFilenameWithHash,
  createTemplateOne,
} from "../../utils/create-templates";

// eslint-disable-next-line react/display-name
export const Webcam: ForwardRefExoticComponent<any> = forwardRef((_, ref) => {
  const webcamRef = useRef(null);
  const [image, setImageSrc] = useState("");
  const mergeCapture = async (picture: string) => {
    try {
      const r = await createTemplateOne(picture);

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

    setImageSrc(merge);
  }, [webcamRef]);

  const clearImage = () => {
    setImageSrc("");
  };

  return (
    <>
      <Wrapper ref={ref}>
        {image ? (
          <>
            <Preview image={image} />
            <Button
              as="a"
              download={createFilenameWithHash("loft-two-years", "jpeg")}
              href={image}
              variant="solid"
            >
              Download
            </Button>
            <Link as="button" onClick={clearImage}>
              Apagar
            </Link>
          </>
        ) : (
          <>
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
          </>
        )}
      </Wrapper>
    </>
  );
});
