import React from "react";

import "./styles/index.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import ArticlePage from "./components/react-route/article.tsx";
import ContactPage from "./components/react-route/contact.tsx";
import ProductPage from "./components/react-route/product.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import AboutPage from "./components/react-route/about.tsx";
import YoutubeDetail from "./components/react-route/youtube-detail.tsx";

/**
 * khỏi tạo router cho ứng dụng React
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "detail/:youtubeId",
        element: <YoutubeDetail />,
      },
      {
        path: "articles",
        element: <ArticlePage />,
        loader: async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
          const user = await response.json();
          return user;
        },
        children: [],
      },
      {
        path: "product/:productId",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "profile",
        element: <div>Profile</div>,
      },
      {
        path: "forgot-password",
        element: <div>Forgot password</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Cung cấp router cho ứng dụng */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
