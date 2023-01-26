
import React from "react";

import ReactDOM  from "react-dom/client";

import Header from "./components/Header";

import Body from "./components/Body";

import About from "./components/About";

import Contact from "./components/Contact";

import RestaurentDetails from "./components/RestaurentDetails";

import Error from "./components/Error";

import Footer from "./components/Footer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Faq from "./components/Faq";

import Profile from "./components/Profile";


const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet/>
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
        children:[
          {
            path: "profile",
            element: <Profile/>,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/faq",
        element: <Faq/>,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentDetails/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
