// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './app.css'
import Home from "./page";
import Table from "./table/table";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'Table',
    element: <Table />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
