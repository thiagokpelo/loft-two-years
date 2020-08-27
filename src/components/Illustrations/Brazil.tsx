import React, { forwardRef, ForwardRefExoticComponent, useMemo } from "react";

import { Image } from "../Image";
import { useBreakpoints } from "../../hooks";

// eslint-disable-next-line react/display-name
export const Brazil: ForwardRefExoticComponent<any> = forwardRef((_, ref) => {
  const matches = useBreakpoints();

  const to = useMemo(
    () => (matches ? { top: 261, left: 425 } : { top: 50, left: 20 }),
    [matches]
  );

  return (
    <Image
      alt="Bandeira do Brasil"
      duration={0.15}
      height="83px"
      from={{ top: -500, left: -10 }}
      position="secondary"
      ref={ref}
      src="https://res.cloudinary.com/thiagokpelo/image/upload/c_scale,w_60/v1598391872/brasil_v1o2ny.png"
      stylePosition="absolute"
      to={to}
      width="60px"
    />
  );
});
