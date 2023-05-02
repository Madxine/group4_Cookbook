import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContentfulContextProvider from "./context/ContentfulContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ContentfulContextProvider>
      <App />
    </ContentfulContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
