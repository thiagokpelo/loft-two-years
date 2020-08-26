import React, { forwardRef, ForwardRefExoticComponent } from "react";

import { Image } from "../Image";

// eslint-disable-next-line react/display-name
export const Logo: ForwardRefExoticComponent<any> = forwardRef((_, ref) => {
  return (
    <Image
      alt="Loft 2 anos"
      duration={0.7}
      position="start"
      ref={ref}
      src="https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/LOFT_jq1mef.png"
      to={{ width: 225 }}
      width="165px"
    />
  );
});
