import React, { forwardRef, ForwardRefExoticComponent, useMemo } from "react";

import { Image } from "../Image";
import { useBreakpoints } from "../../hooks";

// eslint-disable-next-line react/display-name
export const SaoPaulo: ForwardRefExoticComponent<any> = forwardRef((_, ref) => {
  const matches = useBreakpoints();

  const to = useMemo(
    () =>
      matches ? { bottom: 130, right: -100 } : { bottom: 20, right: -300 },
    [matches]
  );

  return (
    <Image
      alt="Cidade de São Paulo com Arco-íris"
      duration={0.7}
      height="456px"
      from={{ bottom: -500, right: -500 }}
      position="start"
      ref={ref}
      src="https://res.cloudinary.com/thiagokpelo/image/upload/v1598391875/SP_e_Pessoa_yv82md.png"
      stylePosition="absolute"
      to={to}
      width="754px"
    />
  );
});
