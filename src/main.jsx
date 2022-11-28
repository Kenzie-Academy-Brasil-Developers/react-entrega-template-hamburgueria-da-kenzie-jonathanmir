import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "../styles/global";
import { GlobalTypography } from "../styles/typography";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalTypography />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
