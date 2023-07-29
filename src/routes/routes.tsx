import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import { DefaultLayout } from "../components/layout";
import Film from "../pages/Detail/Film";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    ),
  },
  {
    path: "category",
    children: [
      {
        path: "",
        element: (
          <DefaultLayout>
            <Category />
          </DefaultLayout>
        ),
      },
      {
        path: "slug",
        element: (
          <DefaultLayout>
            <Film />
          </DefaultLayout>
        ),
      },

    ],
  },
  {
    path: 'login',
    element: (
      <Login />
    ),
  },
  {
    path: 'sign-up',
    element: (
      <SignUp />
    ),
  }
]);
