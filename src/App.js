import React, { useContext } from "react";
import Layout from "./commonAction/layout/sidebar/Layout";
import ThemeContext from "./store/themeContext";
import "./style/dark-mode.scss";
import "./style/main.scss";

function App() {
  const ctx = useContext(ThemeContext);
  console.log(ctx);
  return (
    <div className="main">
      <Sidebar />
      <div className="main-wrapper">
        <h1 className="title">My React App</h1>
        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
        <button className="btn">Explore now</button>
      </div>
    </div>
  );
}

export default App;
