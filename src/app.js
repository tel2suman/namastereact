
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

import { Provider } from "react-redux";

import store from "./utils/store";

import Cart from "./components/Cart";

//import Instamart from "./components/Instamart";


//dynamic import
const Instamart = lazy(() => import("./components/Instamart"));


const AppLayout = () => {

  const [user, setuser] = useState({
    name: "Suman Bhattacharjee",
    email: "suman@gmail.com"
  });

  return (
    <Provider store={store}>
    <UserContext.Provider value={{
      user:user,
      }}>
      <Header />
      <Outlet/>
      <Footer />
      </UserContext.Provider>
    </Provider>
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
        path: "/cart",
        element: <Cart/>,
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
