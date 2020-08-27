import React, { forwardRef, ForwardRefExoticComponent, useMemo } from "react";

import { Image } from "../Image";
import { useBreakpoints } from "../../hooks";

// eslint-disable-next-line react/display-name
export const Cubes: ForwardRefExoticComponent<any> = forwardRef((_, ref) => {
  const matches = useBreakpoints();

  const to = useMemo(
    () => (matches ? { top: 228, right: 244 } : { top: -10, right: -150 }),
    [matches]
  );

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
      to={to}
      width="239px"
    />
  );
});
