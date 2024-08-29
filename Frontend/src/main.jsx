import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EmptyVideoPage from './Components/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Components/HomePage.jsx'
import ReactDom from 'react-dom/client';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
