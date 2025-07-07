// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from "./page";
import { Welcome } from "./welcome/welcome";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'welcome',
    element: <Welcome />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
