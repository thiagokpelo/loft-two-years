import styled from "styled-components";
import WebcamComponent from "react-webcam";

import { ImageComponent } from "../Image/Image.styles";

export const ImageFixed = styled(ImageComponent)<any>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  z-index: 1;
`;

export const Preview = styled.div<{ image?: string }>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
`;

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
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 435px;
  max-height: 554px;
  overflow: hidden;
  padding: 20px 20px 40px;
  background-size: cover;
  background: rgba(255, 255, 255, 0.1) url(${({ image }) => image}) center;
`;
