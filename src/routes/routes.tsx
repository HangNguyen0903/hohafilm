import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import { DefaultLayout } from "../components/layout";

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
        element: <Category />,
      },
    ],
  },
]);
