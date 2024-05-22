import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
