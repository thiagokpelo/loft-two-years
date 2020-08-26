import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${({ theme }) => theme.colors.transparent};
    overflow: hidden;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
