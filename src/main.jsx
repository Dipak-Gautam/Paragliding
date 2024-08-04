import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Screens/Home/Home";

const router = createBrowserRouter([
  { path: "/", element: <App />, children: [{ path: "/", element: <Home /> }] },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
