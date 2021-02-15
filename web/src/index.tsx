import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Modal from "react-modal";
import App from "./App";

Modal.setAppElement("#root");
// Modal.defaultStyles.overlay.backgroundColor = 'cornsilk';
// Modal?.defaultStyles?.overlay?.backgroundColor = "#0000005f";
if (
  Modal.defaultStyles &&
  Modal.defaultStyles.overlay &&
  Modal.defaultStyles.overlay.backgroundColor
) {
  Modal.defaultStyles.overlay.backgroundColor = "#0000005f";
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
