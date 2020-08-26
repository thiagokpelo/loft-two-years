import React from "react";

import { Layout } from "../components/Layout";
import { Introduction } from "../components/Introduction";
import { Gallery } from "../components/Gallery";

const IndexPage = () => (
  <Layout title="Loft 2 Anos | 🎉">
    <Introduction />
    <Gallery />
  </Layout>
);

export default IndexPage;
