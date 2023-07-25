import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import { DefaultLayout } from "../components/layout";
import Film from "../pages/Detail/Film";

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
]);
