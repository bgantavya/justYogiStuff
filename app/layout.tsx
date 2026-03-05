import React from "react";
import ReactDOM from "react-dom/client";
import './app.css';
import Home from "./page";

export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">404 - Not Found</h1>
        <p className="text-gray-700 mb-2">
          Nothing here, don't try to mess with the site.
        </p>
        <a
          href="/"
          className="mt-4 inline-block px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
