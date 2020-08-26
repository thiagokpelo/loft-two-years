import styled from "styled-components";

export const Wrapper = styled.div<{ image?: any }>`
  width: 100%;
  max-width: 250px;
  height: 554px;
  overflow: hidden;
  border-radius: 12px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;
