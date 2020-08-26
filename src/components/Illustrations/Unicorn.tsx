import React, { forwardRef, ForwardRefExoticComponent } from "react";

import { Image } from "../Image";

// eslint-disable-next-line react/display-name
export const Unicorn: ForwardRefExoticComponent<any> = forwardRef((_, ref) => {
  return (
    <Image
      alt="Unicórnio colorido"
      duration={0.7}
      height="126px"
      from={{ bottom: -1000, left: -1000 }}
      position="start"
      ref={ref}
      src="https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/UNicornio_t863uj.png"
      stylePosition="absolute"
      to={{ bottom: 253, left: 268 }}
      width="168px"
    />
  );
});
