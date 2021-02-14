import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Modal from "react-modal";

Modal.setAppElement("#root");
// Modal.defaultStyles.overlay.backgroundColor = 'cornsilk';
Modal.defaultStyles!.overlay!.backgroundColor = "#0000005f";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
