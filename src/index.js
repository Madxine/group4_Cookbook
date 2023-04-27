import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContentfulContextProvider from "./context/ContentfulContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContentfulContextProvider>
      <App />
    </ContentfulContextProvider>
  </React.StrictMode>
);
