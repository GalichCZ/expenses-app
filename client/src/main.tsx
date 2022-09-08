import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "antd/dist/antd.css";
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>
);
