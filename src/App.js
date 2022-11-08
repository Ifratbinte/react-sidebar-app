import React from "react";
import Sidebar from "./commonAction/layout/sidebar/Sidebar";
import "./style/main.scss";

function App() {
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
