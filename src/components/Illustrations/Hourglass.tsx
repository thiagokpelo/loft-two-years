import React, { forwardRef, ForwardRefExoticComponent } from "react";

import { Image } from "../Image";

// eslint-disable-next-line react/display-name
export const Hourglass: ForwardRefExoticComponent<any> = forwardRef(
  (_, ref) => {
    return (
      <Image
        alt="Ampulheta"
        duration={0.15}
        height="111px"
        from={{ top: -100, right: 400 }}
        position="secondary"
        ref={ref}
        src="https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/Ampulheta_mi1smb.png"
        stylePosition="absolute"
        to={{ top: 180 }}
        width="96px"
      />
    );
  }
);
