import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App'
import "./index.css";
import Livechart from "./Livechart";
import Render_live_chart from "./Render_live_chart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Livechart />
    {/* <Render_live_chart /> */}
  </React.StrictMode>
);
