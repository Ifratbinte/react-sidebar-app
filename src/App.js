import React, { useContext } from "react";
import Layout from "./commonAction/layout/sidebar/Layout";
import ThemeContext from "./store/themeContext";
import "./style/dark-mode.scss";
import "./style/main.scss";

function App() {
  const ctx = useContext(ThemeContext);
  console.log(ctx);
  return (
    <div className="main" data-theme={ctx?.theme}>
      <Layout />
    </div>
  );
}

export default App;
