import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import router from "./routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    {/*  아직 theme 쓸 줄 모르므로 light로 고정하고 추후에 수정할 것 */}
    <ThemeProvider theme={lightTheme}>
      <RecoilRoot>
        <GlobalStyle />
        <RouterProvider router={router} />
      </RecoilRoot>
    </ThemeProvider>
  </QueryClientProvider>
);
