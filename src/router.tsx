import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import LoginRedirect from "./pages/Login/LoginRedirect";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  {
    // 홈으로 접근하면 App과 Home을 보여줄것임, App에 Header 넣을것
    path: "/",
    element: <App />,

    // outlet으로 Home부터 나머지 페이지 전부 보여주기
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "loginredirect",
        element: <LoginRedirect />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
