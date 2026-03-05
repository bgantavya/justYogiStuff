import React from "react";
import ReactDOM from "react-dom/client";
import './app.css'
import Home from "./page";



export function NotFound(){
  return (<div className="flex justify-center items-center h-screen w-screen">
    Nothing here, don't try to mess with the site.
  </div>)
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);

