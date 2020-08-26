import React from "react";

import { Layout } from "../components/Layout";
import { Introduction } from "../components/Introduction";
import { Gallery } from "../components/Gallery";

const IndexPage = () => {
  return (
    <Layout title="Loft 2 Anos | 🎉">
      <Introduction>
        <Gallery />
      </Introduction>
    </Layout>
  );
};

export default IndexPage;
