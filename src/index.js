import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register();
//npm run build && npm run start-sw
if ("serviceWorker" in navigator) {
  try {
    navigator.serviceWorker.register("sw.js");
    console.log("SW registred");
  } catch (error) {
    console.log("SW registred failed");
  }
}
