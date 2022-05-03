import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

ReactDOM.render(
  <CssBaseline>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CssBaseline>,
  document.getElementById("root")
);
