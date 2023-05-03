import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";

import Blog from "../Pages/Blog/Blog";
import Chefs from "../Pages/chefs/chefs";
import ChefsDetails from "../Pages/ChefsDetails/ChefsDetails";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error/Error";

import Home from "../Pages/Home/Home";
import SignIn from "../Pages/RegisterPage/SignIn/SignIn";
import SignUp from "../Pages/RegisterPage/SignUp/SignUp";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home />,
          element: <Chefs />,
         

        },
        {
            path: "/blog",
            element: <Blog />,
    
        },
        {
          path: "/chefsdetails",
          element: <ChefsDetails />,
  
      },
        
        {
            path: "/aboutus",
            element: <About />,
    
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
          path: "/signin",
          element: <SignIn />,
  
      },
      {
        path: "/signup",
        element: <SignUp/>,

    },
      


        
      ],
    },
    {
      path:'*',
      element:<Error></Error>
    }
  ]);

  export default router;