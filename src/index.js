import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Product from "./Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/:productID" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
