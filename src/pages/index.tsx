import React from "react";
import { Timeline } from "react-gsap";

import { Layout } from "../components/Layout";
import { Logo } from "../components/Logo";
import {
  Brazil,
  Cubes,
  Hourglass,
  RioDeJaneiro,
  SaoPaulo,
  Unicorn,
} from "../components/Illustrations";

const IndexPage = () => (
  <Layout title="Loft 2 Anos | 🎉">
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
  </Layout>
);

export default IndexPage;
