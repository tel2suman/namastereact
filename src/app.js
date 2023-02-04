
import React, {lazy, Suspense} from "react";

import ReactDOM  from "react-dom/client";

import Header from "./components/Header";

import Body from "./components/Body";

import About from "./components/About";

import Contact from "./components/Contact";

import RestaurentDetails from "./components/RestaurentDetails";

import Error from "./components/Error";

import Footer from "./components/Footer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { useState } from "react";

import Faq from "./components/Faq";

import Profile from "./components/Profile";

import Shimmer from "./components/Shimmer";

import UserContext from "./utils/UserContext";

//import Instamart from "./components/Instamart";


//dynamic import
const Instamart = lazy(() => import("./components/Instamart"));


const AppLayout = () => {

  const [user, setuser] = useState({
    name: "Suman Bhattacharjee",
    email: "suman@gmail.com"
  });

  return (
    <React.Fragment>
    <UserContext.Provider value={{
      user:user,
      }}>
      <Header />
      <Outlet/>
      <Footer />
      </UserContext.Provider>
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
        element: <Body user={{
          name: "namaste",
          email: "abc@gmail.com",
        }}/>,
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
        path: "/instamart",
        element: 
        <Suspense fallback={<Shimmer/>}>
          <Instamart/>
        </Suspense>,
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
