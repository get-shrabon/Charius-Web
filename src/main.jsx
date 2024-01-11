import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root/Root";
import Home from "./Layout/Pages/HomePage/Home";
import NewsDetails from "./Layout/Pages/NewsDetails/NewsDetails";
import LoginPage from "./Layout/Pages/LoginPage/LoginPage";
import SignUp from "./Layout/Pages/SignUpPage/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/login",
        element:<LoginPage/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path: "/newsDetails/:id",
        element: <NewsDetails />,
        loader: () => fetch("news-data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
