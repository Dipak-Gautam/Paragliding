import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Gallary from "./Screens/Gallary/Gallary";
import Blog from "./Screens/Blog/Blog";
import AboutUs from "./Screens/AboutUS/AboutUs";
import ContactUs from "./Screens/Contact/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/gallary", element: <Gallary /> },
      { path: "/blog", element: <Blog /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/contact", element: <ContactUs /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
