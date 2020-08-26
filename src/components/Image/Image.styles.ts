import styled from "styled-components";

export type ImageType = {
  height?: number | string | "auto";
  stylePosition?: "absolute" | "relative" | "fixed";
  ref?: any;
  width?: number | string | "auto";
};

export const ImageComponent = styled.img<ImageType>`
  display: flex;
  height: ${({ height }) => height};
  object-fit: contain;
  position: ${({ stylePosition }) => stylePosition};
  width: ${({ width }) => width};
`;
