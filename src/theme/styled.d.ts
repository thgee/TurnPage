import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    commonColor: {
      point: string;
      titleText: string;
      bg: string;
      normalText: string;
    };

    btnColor: {
      btn1Bg: string;
      btn1Text: string;
      btn2Bg: string;
      btn2Text: string;
    };

    // 홈화면 친구들의 독후감, 현재 판매중인 책 탭버튼
    homeTabColor: {
      tabActiveBg: string;
      tabActiveText: string;
      tabInactiveBg: string;
      tabInactiveText: string;
    };

    fontFamily: {
      light: string;
      medium: string;
      bold: string;
    };
  }
}
