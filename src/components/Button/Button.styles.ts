import styled from "styled-components";

export const Button = styled.button<{ variant?: "solid" | "outline" }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
  border: ${({ theme, variant }) =>
    variant === "solid" ? "none" : `2px solid ${theme.colors.primary}`};
  border-radius: 12px;
  padding: 16px 32px;
  background-color: ${({ theme, variant }) =>
    variant === "solid" ? theme.colors.primary : theme.colors.transparent};
  color: ${({ theme, variant }) =>
    variant === "solid" ? theme.colors.common?.white : theme.colors.primary};
  z-index: 1;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
`;

export const Link = styled.a`
  position: relative;
  color: ${({ theme }) => theme.colors.common?.white};
  z-index: 1;
  outline: none;
  text-align: center;
  margin-top: 24px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.transparent};
  border: none;
  text-decoration: underline;
  cursor: pointer;
`;
