import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./assets/scss/style.scss";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
