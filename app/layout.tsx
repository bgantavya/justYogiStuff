// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './app.css'
import Home from "./page";
import ProductList from "./productList/productList";
import ItemCard from "./components/productCard/itemCard";


const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList />,
  },
  {
    path: 'products',
    element: <ProductList />,
  },
  {
    path: 'product/:sku',
    element: <ItemCard/>
  }

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
