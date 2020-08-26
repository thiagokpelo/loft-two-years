import React, { useCallback, useRef, useState } from "react";
import WebcamComponent from "react-webcam";

import { Wrapper } from "./Webcam.styles";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

export const Webcam = () => {
  const webcamRef = useRef(null);
  const [image, setImageSrc] = useState(null);

  const capture = useCallback(() => {
    const response = webcamRef.current
      ? webcamRef.current.getScreenshot()
      : null;

    setImageSrc(response);

    window.alert("Fotinhoooo");
  }, [webcamRef]);

  console.log(image);

  return (
    <Wrapper>
      <WebcamComponent
        audio={false}
        height={554}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={250}
        videoConstraints={videoConstraints}
      />
    </Wrapper>
  );
};
