import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CssBaseline>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CssBaseline>
);
