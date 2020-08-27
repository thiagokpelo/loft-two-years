import React, { FC, useMemo, useRef } from "react";

import { Timeline, Tween } from "react-gsap";
import { ImageComponent } from "../Image/Image.styles";
import { useBreakpoints } from "../../hooks";

// eslint-disable-next-line react/display-name
export const Logo: FC = () => {
  const imageRef = useRef(null);
  const matches = useBreakpoints();

  const firstTo = useMemo(() => (matches ? { width: 225 } : { width: 180 }), [
    matches,
  ]);

  const secondTo = useMemo(
    () => (matches ? { top: 48, width: 105 } : { top: 10, width: 85 }),
    [matches]
  );

  return (
    <Timeline
      target={
        <>
          <ImageComponent
            ref={imageRef}
            width="165px"
            stylePosition="absolute"
            src="https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/LOFT_jq1mef.png"
            alt="Loft 2 anos"
          />
        </>
      }
    >
      <Tween duration={0.7} to={firstTo} />
      <Tween duration={0.3} to={secondTo} position="+=1" />
    </Timeline>
  );
};
