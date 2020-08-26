import styled from "styled-components";

export const Background = styled.main<{
  to?: any;
  duration?: number;
  height?: any;
  background?: any;
  position?: string;
}>`
  position: relative;
  padding: 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height || "100vh"};
  justify-content: center;
  width: 100vw;
`;
