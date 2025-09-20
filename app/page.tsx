import { Footer, Header } from "./components/productCard/hf";
import { createBrowserRouter, Route, Routes, RouterProvider } from "react-router-dom";
import Cart from "./cart/cart";
import ProductList from "./productList/productList";
import ItemCard from "./components/productCard/itemCard";
import { NotFound } from "./layout";
import { useState, useEffect, createContext } from "react";
// import { SignUp, ForgotPassword } from "./auth/creds";
import  Login  from "./auth/login";
import  SignUp  from "./auth/signup";
import  ForgotPassword  from "./auth/forgotpass";
import AuthRoutes from "./routes/authRoutes";
import UserRoutes from "./routes/userRoutes";
import Alert from "./components/alert";
import DashBoard from "./dashboard/lp";

interface UserContextType {
  user: string | null; 
  setuser: React.Dispatch<React.SetStateAction<string | null>>;
}
export const UserContext = createContext<UserContextType>({user:"", setuser:()=>{}})

import Todo from "./table/todo";
import Done from "./table/done";
import { HappyTracker, SadTracker } from "./mood/tracker";
import { HappyIncrementor, SadIncrementor } from "./mood/incrementor";
export default function Home() {
  // Load cart from localStorage on mount
  const token = localStorage.getItem("token");
  // if (token) {
  //   /* providing accessToken in bearer */
  //   fetch('https://dummyjson.com/auth/me', {
  //   method: 'GET',
  //   headers: {
  //     'Authorization': token,
  //   }, 
  //   credentials: 'include'
  // })
  // .then(res => {res.json()})

  // }
  const [user, setuser] = useState(localStorage.getItem("token"));
  const [cart, setCart] = useState<{ [key: number]: number }>(() => {
    try {
      return JSON.parse(localStorage.getItem("cart") || "{}");
    } catch {
      return {};
    }
  });

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
    window.location.reload()
    
  }

  // const router = createBrowserRouter([
  //   { path: "/", element: <ProductList /> },
  //   { path: "products", element: <ProductList /> },
  //   { path: "product/:sku", element: <ItemCard onAdd={handleAddToCart} /> },
  //   { path: "cart", element: <Cart qtychange={handleAddToCart}/> },
  //   { path: "login", element: <Login setuser={setuser} /> },
  //   { path: "signup", element: <SignUp /> },
  //   { path: "forgot-password", element: <ForgotPassword /> },
  //   { path: "*", element: <NotFound /> },
  // ]);

  return (
    
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
      >
      <Header tc={num} />
      <Alert warn="not that bad" type="info"/>
      <main
        style={{
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 16px rgba(60,72,88,0.08)",
        }}
      >
        {/* <RouterProvider router={router} /> */}
          <UserContext.Provider value={{user, setuser}}>
        <Routes>
          {/* <AuthRoutes user={user} element={<Login setuser={setuser}/>} /> */}
          {/* <UserRoutes user={user} index element={<ProductList />} /> */}
          <Route 
          path="/login" 
          element={<AuthRoutes 
          >
            <Login setuser={setuser}/>
          </AuthRoutes>}
          />
          <Route 
          path="/signup" 
          element={<AuthRoutes 
          >
            <SignUp />
          </AuthRoutes>}
          />
          <Route 
          path="/forgot-password" 
          element={<AuthRoutes 
          >
            <ForgotPassword />
          </AuthRoutes>}
          />
          <Route 
          path="/products" 
          element={<UserRoutes
            > 
            <ProductList />
          </UserRoutes>}
          />
          <Route 
          path="/product/:sku" 
          element={<UserRoutes 
          >
            <ItemCard onAdd={handleAddToCart} />
          </UserRoutes>}
          />
          <Route 
          path="/cart" 
          element={<UserRoutes 
            >
            <Cart qtychange={handleAddToCart}/>
          </UserRoutes>}
          />
          <Route path="/" element={
            <UserRoutes>
              <DashBoard />
            </UserRoutes>
          }>
          </Route>
          
          <Route path="/mood" element={<div className="flex flex-col items-center">
    <div className="text-5xl font-bold my-10">X-TODO</div>
    <HappyTracker/>
        <SadTracker/>
            <HappyIncrementor/>
        <SadIncrementor/>

  </div>} />

          {/* <Route index element={<UserRoutes user={user} index element={<ProductList />} />} /> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
        </UserContext.Provider>
      </main>
      <Footer/>
    </div>
  );
}
