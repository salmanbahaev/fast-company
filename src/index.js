import React from "react";
import ReactDOM from "react-dom/client";
import Users from "./app/components/users";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>
);
reportWebVitals();
