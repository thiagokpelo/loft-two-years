import React, { FC, useRef } from "react";

import { Timeline, Tween } from "react-gsap";
import { ImageComponent } from "../Image/Image.styles";

// eslint-disable-next-line react/display-name
export const Logo: FC = () => {
  const imageRef = useRef(null);

  return (
    <Timeline
      target={
        <>
          <ImageComponent
            ref={imageRef}
            width="165px"
            stylePosition="absolute"
            src="https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/LOFT_jq1mef.png"
            alt="Loft 2 anos"
          />
        </>
      }
    >
      <Tween duration={0.7} to={{ width: 225 }} />
      <Tween duration={0.3} to={{ top: 48, width: 105 }} position="+=1" />
    </Timeline>
  );
};
