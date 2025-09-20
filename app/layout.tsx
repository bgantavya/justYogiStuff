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
import Todo from "./table/todo";
import { Provider } from "react-redux";
import store from "./mood/store";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'table',
    element: <Table />,
  },
    {
    path: 'todo',
    element: <Todo />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
