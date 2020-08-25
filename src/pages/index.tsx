import React from "react";
import { Timeline, Tween } from "react-gsap";

import { Layout } from "../components/Layout";
import { Logo } from "../components/Logo";

const IndexPage = () => (
  <Layout title="Loft 2 Anos | 🎉">
    <Timeline labels={[{ label: "start", position: 1 }]}>
      <Tween position="start" duration={0.7} to={{ width: 225 }}>
        <Logo />
      </Tween>
      <Tween
        position="start"
        duration={0.7}
        from={{ top: -1000, left: -1000 }}
        to={{ top: 122, left: 236 }}
      >
        <img
          style={{ position: "absolute" }}
          width={270}
          height={173}
          src="https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/RJ_fbqsa3.png"
          alt="RJ"
        />
      </Tween>
      <Tween
        position="start"
        duration={0.7}
        from={{ bottom: -1000, left: -1000 }}
        to={{ bottom: 253, left: 268 }}
      >
        <img
          style={{ position: "absolute" }}
          width={168}
          height={126}
          src="https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/UNicornio_t863uj.png"
          alt="RJ"
        />
      </Tween>
      <Tween
        position="start"
        duration={0.7}
        from={{ top: -500, right: -500 }}
        to={{ top: 228, right: 244 }}
      >
        <img
          style={{ position: "absolute" }}
          width={239}
          height={169}
          src="https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/Cubos_xzusea.png"
          alt="RJ"
        />
      </Tween>
      <Tween
        position="start"
        duration={0.7}
        from={{ bottom: -500, right: -500 }}
        to={{ bottom: 152, right: -100 }}
      >
        <img
          style={{ position: "absolute" }}
          width={754}
          height={456}
          src="https://res.cloudinary.com/thiagokpelo/image/upload/v1598391875/SP_e_Pessoa_yv82md.png"
          alt="RJ"
        />
      </Tween>
    </Timeline>
  </Layout>
);

export default IndexPage;
