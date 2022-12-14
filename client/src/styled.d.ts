import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      black: string;
      white: string;
      grayText: string;
      purpleColor: string;
      zeroColor: string;
      xColor: string;
    };
    fonts: {
      bold: string;
      medium: string;
      regular: string;
    };
  }
}
