import React, { forwardRef, ForwardRefExoticComponent } from "react";

import { Image } from "../Image";

// eslint-disable-next-line react/display-name
export const Brazil: ForwardRefExoticComponent<any> = forwardRef((_, ref) => {
  return (
    <Image
      alt="Bandeira do Brasil"
      duration={0.15}
      height="83px"
      from={{ top: -500, left: -10 }}
      position="secondary"
      ref={ref}
      src="https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/brasil_v1o2ny.png"
      stylePosition="absolute"
      to={{ top: 281, left: 436 }}
      width="114px"
    />
  );
});
