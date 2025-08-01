import { Footer, Header } from "./components/productCard/hf";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./cart/cart";
import ProductList from "./productList/productList";
import ItemCard from "./components/productCard/itemCard";
import { NotFound } from "./layout";
import { useState, useEffect } from "react";
// import { SignUp, ForgotPassword } from "./auth/creds";
import  Login  from "./auth/login";
import  SignUp  from "./auth/signup";
import  ForgotPassword  from "./auth/forgotpass";

export default function Home() {
  // Load cart from localStorage on mount
  const [cart, setCart] = useState<{ [key: number]: number }>(() => {
    try {
      return JSON.parse(localStorage.getItem("cart") || "{}");
    } catch {
      return {};
    }
  });

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
 let num =  Object.keys(cart).length
  function handleAddToCart(qty: number, i: number) {
    const prevCart = JSON.parse(localStorage.getItem("cart")|| "{}")
    setCart(() => ({
      ...prevCart,
      [i]: (prevCart[i] || 0) + qty,
    }));
    num =  Object.keys(cart).length
  }

  const router = createBrowserRouter([
    { path: "/", element: <ProductList /> },
    { path: "products", element: <ProductList /> },
    { path: "product/:sku", element: <ItemCard onAdd={handleAddToCart} /> },
    { path: "cart", element: <Cart qtychange={handleAddToCart}/> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <SignUp /> },
    { path: "forgot-password", element: <ForgotPassword /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <Header tc={num} />
      <main
        style={{
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 16px rgba(60,72,88,0.08)",
        }}
      >
        <RouterProvider router={router} />
      </main>
      <Footer/>
    </div>
  );
}
