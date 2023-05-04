import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContentfulContextProvider from "./context/ContentfulContext";
import NutritionContextProvider from "./context/NutritionContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ContentfulContextProvider>
      <NutritionContextProvider>
        <App />
      </NutritionContextProvider>
    </ContentfulContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
