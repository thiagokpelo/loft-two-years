import { Timeline } from "react-gsap";
import React, { forwardRef, ForwardRefExoticComponent } from "react";
import { Logo } from "../Logo";
import {
  Brazil,
  Cubes,
  Hourglass,
  RioDeJaneiro,
  SaoPaulo,
  Unicorn,
} from "../Illustrations";

// "https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/RJ_fbqsa3.png"

// eslint-disable-next-line react/display-name
export const Introduction: ForwardRefExoticComponent<any> = forwardRef(() => {
  return (
    <Timeline
      labels={[
        { label: "start", position: 1 },
        { label: "secondary", position: 2 },
      ]}
    >
      <Logo />
      <RioDeJaneiro />
      <Unicorn />
      <Cubes />
      <SaoPaulo />
      <Brazil />
      <Hourglass />
    </Timeline>
  );
});
