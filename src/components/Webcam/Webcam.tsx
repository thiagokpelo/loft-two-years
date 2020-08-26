import React, {
  forwardRef,
  ForwardRefExoticComponent,
  useCallback,
  useRef,
  useState,
} from "react";

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

  const capture = useCallback(() => {
    const response = webcamRef.current
      ? // @ts-ignore
        webcamRef.current.getScreenshot()
      : null;

    setImageSrc(`data:image/jpeg;base64${response}`);
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
