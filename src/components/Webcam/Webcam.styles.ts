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
