import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDom from 'react-dom/client';
import HomePage from "./Pages/HomePage.jsx";
import VideoDetailPage from './Pages/VideoDetailPage.jsx'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "/videodetail",
    element: <VideoDetailPage />
  }
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
