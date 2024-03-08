import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import '../src/assets/css/tailwind.css'
import "../src/assets/css/materialdesignicons.min.css"
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <App />
    </BrowserRouter>
);
