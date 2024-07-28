import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import { FilterProvider } from "./context/FilterContext.jsx";
import {CartProvider} from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
    <FilterProvider>
      <App />
      </FilterProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
