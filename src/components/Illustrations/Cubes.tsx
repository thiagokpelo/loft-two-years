import React, { forwardRef, ForwardRefExoticComponent } from "react";

import { Image } from "../Image";

// eslint-disable-next-line react/display-name
export const Cubes: ForwardRefExoticComponent<any> = forwardRef((_, ref) => {
  return (
    <Image
      alt="Cubos mágicos"
      duration={0.7}
      height="169px"
      from={{ top: -500, right: -500 }}
      position="start"
      ref={ref}
      src="https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/Cubos_xzusea.png"
      stylePosition="absolute"
      to={{ top: 228, right: 244 }}
      width="239px"
    />
  );
});
