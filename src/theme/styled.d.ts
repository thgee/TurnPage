import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    pointColor: string;
    titleTextColor: string;
    bgColor: string;
    normalTextColor: string;
    btnBBgColor: string;
    btnABgColor: string;
    btnATextColor: string;
    btnBTextColor: string;
  }
}
