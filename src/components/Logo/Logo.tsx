import React, { ForwardRefExoticComponent, forwardRef } from "react";

import { Image } from "./Logo.styles";

// eslint-disable-next-line react/display-name
export const Logo: ForwardRefExoticComponent<any> = forwardRef((_, ref) => {
  return (
    <Image
      ref={ref}
      src="https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/LOFT_jq1mef.png"
      alt="Loft 2 anos"
    />
  );
});
