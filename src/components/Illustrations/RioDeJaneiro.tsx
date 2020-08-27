import React, { forwardRef, ForwardRefExoticComponent, useMemo } from "react";

import { Image } from "../Image";
import { useBreakpoints } from "../../hooks";

// eslint-disable-next-line react/display-name
export const RioDeJaneiro: ForwardRefExoticComponent<any> = forwardRef(
  (_, ref) => {
    const matches = useBreakpoints();

    const to = useMemo(
      () => (matches ? { top: 122, left: 236 } : { top: 50, left: -150 }),
      [matches]
    );

    return (
      <Image
        alt="Cidade do Rio de Janeiro"
        duration={0.7}
        height="173px"
        from={{ top: -1000, left: -1000 }}
        position="start"
        ref={ref}
        src="https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/RJ_fbqsa3.png"
        stylePosition="absolute"
        to={to}
        width="270px"
      />
    );
  }
);
