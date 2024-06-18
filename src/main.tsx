import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

/**
 * khỏi tạo router cho ứng dụng React
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div>
        About
        <Link to={"about"}>About</Link>
        <Link to={"/"}>Home</Link>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Cung cấp router cho ứng dụng */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
