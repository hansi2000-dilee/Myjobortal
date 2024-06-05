import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import { children } from "react";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        { path: "/", element: <Home/>},
        { path: "/about", element: <About/>},
        { path: "/contact", element: <Contact/>},
    ],
   },
  ]);

  export default router;