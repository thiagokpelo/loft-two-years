import { Tween } from "react-gsap";
import React, { forwardRef, ForwardRefExoticComponent } from "react";

import { ImageComponent } from "./Image.styles";

// "https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/RJ_fbqsa3.png"

// eslint-disable-next-line react/display-name
export const Image: ForwardRefExoticComponent<any> = forwardRef(
  (
    { duration, from, to, width, height, position, src, stylePosition, alt },
    ref
  ) => {
    return (
      <Tween position={position} duration={duration} from={from} to={to}>
        <ImageComponent
          ref={ref}
          width={width}
          height={height}
          stylePosition={stylePosition}
          src={src}
          alt={alt}
        />
      </Tween>
    );
  }
);
