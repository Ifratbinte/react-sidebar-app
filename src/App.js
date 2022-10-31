import React, { useContext } from "react";
import Sidebar from "./commonAction/layout/sidebar/Sidebar";
import ThemeContext from "./store/themeContext";
import "./style/dark-mode.scss";
import "./style/main.scss";

function App() {
  const ctx = useContext(ThemeContext);
  console.log(ctx);
  return (
    <div className="main" data-theme={ctx?.theme}>
      <Sidebar />
    </div>
  );
}

export default App;
