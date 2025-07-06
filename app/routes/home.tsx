import type { Route as HR } from "./+types/home";
import ProductList from "~/productList/productList";
import { Routes, Route, BrowserRouter } from "react-router";
import ItemCard from "~/components/productCard/itemCard";

export function meta({}: HR.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <ProductList/>
  
}
