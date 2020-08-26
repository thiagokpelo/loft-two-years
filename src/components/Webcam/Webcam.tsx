import React, {
  forwardRef,
  ForwardRefExoticComponent,
  useCallback,
  useRef,
  useState,
} from "react";
import WebcamComponent from "react-webcam";

import { Wrapper } from "./Webcam.styles";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

// eslint-disable-next-line react/display-name
export const Webcam: ForwardRefExoticComponent<any> = forwardRef((_, ref) => {
  const webcamRef = useRef(null);
  const [image, setImageSrc] = useState(null);

  const capture = useCallback(() => {
    const response = webcamRef.current
      ? // @ts-ignore
        webcamRef.current.getScreenshot()
      : null;

    setImageSrc(response);

    window.alert("Fotinhoooo");
  }, [webcamRef]);

  console.log(image, capture);

  return (
    <Wrapper ref={ref}>
      <WebcamComponent
        audio={false}
        height={554}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={300}
        videoConstraints={videoConstraints}
      />
    </Wrapper>
  );
});
