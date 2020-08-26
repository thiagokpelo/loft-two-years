import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius?: string;

    colors: {
      primary: string;
      secondary?: string;
      transparent: "transparent";
      common?: {
        white?: string;
      };
    };
  }
}
