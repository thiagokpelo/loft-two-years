import styled from "styled-components";

export const Wrapper = styled.div<{ image?: any; ref?: any }>`
  width: 100%;
  max-width: 300px;
  height: 554px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1) url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;
