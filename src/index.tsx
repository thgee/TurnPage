import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // 아직 theme 쓸 줄 모르므로 light로 고정하고 추후에 수정할 것
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>
);
