import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Add from "../pages/Add";
import Blogs from "../pages/Blogs";
import Details from "../pages/Details";
import Error from "../pages/Error";
import Featured from "../pages/Featured";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Update from "../pages/Update";
import Wishlist from "../pages/Wishlist";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "add",
        element: (
          <PrivateRoute>
            <Add></Add>
          </PrivateRoute>
        ),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "details/:blogId",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "featured",
        element: <Featured></Featured>,
      },
      {
        path: "update/:blogId",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PrivateRoute>
            <Wishlist></Wishlist>
          </PrivateRoute>
        ),
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
  }
]);

export default router;
