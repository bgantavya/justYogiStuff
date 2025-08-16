import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import Home from "./page";
import { BrowserRouter } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-br from-gray-100 to-orange-100 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 text-center max-w-md w-full transform transition-all duration-500 hover:scale-105 hover:shadow-orange-200 animate-slideUp">
        <svg
          className="mx-auto mb-6 animate-bounce"
          width="64"
          height="64"
          fill="none"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="32" fill="#FDBA74" />
          <path
            d="M32 18v16M32 44h.02"
            stroke="#fff"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <h1 className="text-4xl font-extrabold text-orange-600 mb-4 drop-shadow-lg transition-colors duration-300">
          404 - Page Not Found
        </h1>
        <p className="text-gray-700 mb-4 text-lg md:text-xl transition-opacity duration-300">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-4 inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 animate-pulse"
        >
          Return Home
        </a>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0 }
            to { opacity: 1 }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease;
          }
          @keyframes slideUp {
            from { transform: translateY(40px); opacity: 0 }
            to { transform: translateY(0); opacity: 1 }
          }
          .animate-slideUp {
            animation: slideUp 0.7s cubic-bezier(.4,2,.6,1) 0.2s both;
          }
        `}
      </style>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Home />
    </BrowserRouter>
  </React.StrictMode>
);
