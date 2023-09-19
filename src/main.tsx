import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import Profile from "./dashboard/profile/Profile.tsx";
import ShoppingCart from "./dashboard/cart/ShoppingCart.tsx";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
