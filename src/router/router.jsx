import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Blogs from "../pages/Blogs";
import Details from "../pages/Details";
import Update from "../pages/Update";
import Featured from "../pages/Featured";
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "add",
        element: <Add></Add>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "details",
        element: <Details></Details>,
      },
      {
        path: "featured",
        element: <Featured></Featured>,
      },
      {
        path: "update",
        element: <Update></Update>,
      },
      {
        path: "wishlist",
        element: <Wishlist></Wishlist>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
