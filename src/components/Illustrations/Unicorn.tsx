import React, { forwardRef, ForwardRefExoticComponent, useMemo } from "react";

import { Image } from "../Image";
import { useBreakpoints } from "../../hooks";

// eslint-disable-next-line react/display-name
export const Unicorn: ForwardRefExoticComponent<any> = forwardRef((_, ref) => {
  const matches = useBreakpoints();

  const to = useMemo(
    () => (matches ? { bottom: 253, left: 268 } : { bottom: 253, left: 320 }),
    [matches]
  );

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
      width="168px"
      to={to}
    />
  );
});
