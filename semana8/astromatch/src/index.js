import React from "react";
import ReactDOM from "react-dom";
import "./globalStyled";
import App from "./App";
import Global from "./globalStyled";

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
