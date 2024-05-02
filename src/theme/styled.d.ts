import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    pointColor: string;
    titleTextColor: string;
    bgColor: string;
    normalTextColor: string;
    BtnLightBgColor: string;
    btnDarkBgColor: string;
    btnDarkTextColor: string;
  }
}
