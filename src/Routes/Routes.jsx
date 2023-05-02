import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";

import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home />,

        },
        {
            path: "/blog",
            element: <Blog />,
    
        },
        {
            path: "/aboutus",
            element: <About />,
    
        },
        {
          path: "/error",
          element: <Error />,
  
      },


        
      ],
    },
  ]);

  export default router;