import React, { forwardRef, ForwardRefExoticComponent, useMemo } from "react";

import { Image } from "../Image";
import { useBreakpoints } from "../../hooks";

// eslint-disable-next-line react/display-name
export const Hourglass: ForwardRefExoticComponent<any> = forwardRef(
  (_, ref) => {
    const matches = useBreakpoints();

    const to = useMemo(
      () => (matches ? { top: 180 } : { top: 100, right: 100 }),
      [matches]
    );

    return (
      <Image
        alt="Ampulheta"
        duration={0.15}
        height="111px"
        from={{ top: -100, right: 400 }}
        position="secondary"
        ref={ref}
        src="https://res.cloudinary.com/thiagokpelo/image/upload/c_scale,w_45/v1598391872/Ampulheta_mi1smb.png"
        stylePosition="absolute"
        to={to}
        width="45px"
      />
    );
  }
);
