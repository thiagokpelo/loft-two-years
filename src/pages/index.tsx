import React from "react";
import Link from "next/link";
import styled from "styled-components";

import Layout from "../components/Layout";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Title>Hello Next.js 👋</Title>
    <h2>Teste</h2>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
