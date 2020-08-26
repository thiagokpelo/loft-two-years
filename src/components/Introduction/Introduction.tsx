import { Timeline, Tween } from "react-gsap";
import React, { FC } from "react";
import { Logo } from "../Logo";
import {
  Brazil,
  Cubes,
  Hourglass,
  RioDeJaneiro,
  SaoPaulo,
  Unicorn,
} from "../Illustrations";
import { Background } from "./Introduction.styles";
import { theme } from "../../theme";

// eslint-disable-next-line react/display-name
export const Introduction: FC = ({ children }) => {
  return (
    <Timeline
      labels={[
        { label: "start", position: 0 },
        { label: "secondary", position: 0.5 },
        { label: "background", position: 1 },
        { label: "logoToHeader", position: 1 },
      ]}
    >
      <Tween
        position="background"
        duration={1}
        to={{ background: theme.colors.secondary }}
      >
        <Background>
          <Logo />
          <RioDeJaneiro />
          <Unicorn />
          <Cubes />
          <SaoPaulo />
          <Brazil />
          <Hourglass />
          {children}
        </Background>
      </Tween>
    </Timeline>
  );
};
