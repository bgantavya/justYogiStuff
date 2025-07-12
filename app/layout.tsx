import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './app.css'
import Cart from "./cart/cart";
import ProductList from "./productList/productList";
import ItemCard from "./components/productCard/itemCard";
import { Header } from "./components/productCard/hf";

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
  },
  {
    path: 'cart',
    element: <Cart/>
  },
  {
    path: '*',
    element: <NotFound/>
  },
]);

export function NotFound(){
  return (<div className="flex justify-center items-center h-screen w-screen">
    Nothing here, don't try to mess with the site.
  </div>)
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

