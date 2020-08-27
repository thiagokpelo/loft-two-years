import styled from "styled-components";

export const Card = styled.div<{ image?: any; ref?: any }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 435px;
  max-height: 554px;
  overflow: hidden;
  padding: 20px 20px 40px;
  background-size: cover;
  background: rgba(255, 255, 255, 0.1) url(${({ image }) => image}) center;
  border-radius: 20px;

  @media only screen and (max-width: 375px) {
    max-height: 400px;
  }
`;
