import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Header } from "./components";

import "./scss/app.scss";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
