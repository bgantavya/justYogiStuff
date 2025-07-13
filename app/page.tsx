import { Header } from "./components/productCard/hf";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./cart/cart";
import ProductList from "./productList/productList";
import ItemCard from "./components/productCard/itemCard";
import { NotFound } from "./layout";
import { useState } from "react";


export default function Home() {
  const [cart, setcart] = useState<{[key: number]: number}>({});
  function handleAddToCart(qty: number, i: number) {
    setcart({...cart, [i]: (cart[i] || 0) + qty})
  }



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
    element: <ItemCard onAdd={handleAddToCart} />
  },
  {
    path: 'cart',
    element: <Cart cartItems={cart} />
  },
  {
    path: '*',
    element: <NotFound/>
  },
]);
  return (
    <>
    <Header tc={Object.keys(cart).length} />
    <RouterProvider router={router} />
    </>
  );
}
