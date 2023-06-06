import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Livechart from "./Livechart";
import Render_live_chart from "./Render_live_chart";
import DHT11 from "./DHT11_api";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Livechart /> */}
    {/* <Render_live_chart /> */}
    <DHT11 />
  </React.StrictMode>
);
