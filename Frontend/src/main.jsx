import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDom from 'react-dom/client';
import HomePage from "./Pages/HomePage.jsx";
import VideoDetailPage from './Pages/VideoDetailPage.jsx'
import ChannelSubscribedListPage from './Pages/ChannelPages/ChannelSubscribedListPage.jsx';
import ChannelVideoListPage from './Pages/ChannelPages/ChannelVideoListPage.jsx';
import ChannelPlaylistListPage from './Pages/ChannelPages/ChannelPlaylistListPage.jsx';
import ChannelPlaylistVideoListPage from './Pages/ChannelPages/ChannelPlaylistVideoListPage.jsx';
import ChannelTweetsListPage from './Pages/ChannelPages/ChannelTweetsListPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import RegistrationPage from './Pages/RegistrationPage.jsx';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/videodetail",
    element: <VideoDetailPage />,
  },
  {
    path: "/allsubscribers",
    element: <ChannelSubscribedListPage />,
  },
  {
    path: "/channelvideos",
    element: <ChannelVideoListPage />,
  },
  {
    path: "/channelplaylists",
    element: <ChannelPlaylistListPage />,
  },
  {
    path: "/channelplaylistvideo",
    element: <ChannelPlaylistVideoListPage />,
  },
  {
    path: "/channeltweet",
    element: <ChannelTweetsListPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegistrationPage />
  }
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
