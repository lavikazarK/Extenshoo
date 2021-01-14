/*global chrome*/
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";

window.onload = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: "AGENCIES",
      data: {}
    });
  });
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
