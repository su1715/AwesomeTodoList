import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Today from "./pages/Today";
import Log from "./pages/Log";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="today" element={<Today />} />
          <Route path="log" element={<Log />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
