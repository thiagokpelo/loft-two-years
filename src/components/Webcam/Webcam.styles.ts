import styled from "styled-components";
import WebcamComponent from "react-webcam";

export const WebcamFixed = styled(WebcamComponent)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

export const Wrapper = styled.div<{ image?: any; ref?: any }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: 300px;
  height: 554px;
  overflow: hidden;
  padding: 20px;
  background-size: cover;
  background: rgba(255, 255, 255, 0.1) url(${({ image }) => image}) center;
`;
