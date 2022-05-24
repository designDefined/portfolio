import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootContainer = document.querySelector("#root-container");

ReactDOM.createRoot(rootContainer).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
