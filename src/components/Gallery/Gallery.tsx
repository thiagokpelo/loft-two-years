import { Timeline, Tween } from "react-gsap";
import React, { useRef } from "react";

import { Webcam } from "../Webcam";

export const Gallery = () => {
  const webcamRef = useRef(null);

  return (
    <Timeline
      target={
        <>
          <Webcam ref={webcamRef} />
        </>
      }
    >
      <Tween
        from={{ scale: 0, borderRadius: 200 }}
        to={{ scale: 1, borderRadius: 20 }}
        duration={0.2}
      />
    </Timeline>
  );
};
