import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Reactdom  from 'react-dom/client'
import HomePage from './Components/HomePage.jsx'
import React from 'react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
