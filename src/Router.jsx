// Router.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./component/public/Home/Home";
import Ground from "./component/public/Ground/Ground";
import AboutUs from "./component/public/About/AboutUs";
import ContactUs from "./component/public/Contact/ContactUs";
import GroundDetails from "./component/public/GroundDetails/GroundDetails";
import Login from "./component/public/Login/Login";
import SignUp from "./component/public/SignUp/SignUp";

const publicRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/ground",
        element: <Ground />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/groundDetails",
        element: <GroundDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

export { publicRouter };
