import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { cartProducts } from "./Components/reduxCart/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={cartProducts}>
<BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
);


