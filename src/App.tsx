import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import LayoutRoot from "./Pages/LayoutRoot";
import Home from "./Pages/Home";
import Authentication from "./Pages/User/Authentication";
import Profile from "./Pages/User/Profile";
import Recipe from "./Pages/Recipe/Recipe";
import RecipeDetails from "./Pages/Recipe/RecipeDetails";
import RecipeManage from "./Pages/Recipe/RecipeManage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <LayoutRoot />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/user",
        children: [
          { index: true, element: <Authentication /> },
          { path: "/user/profile", element: <Profile /> },
        ],
      },
      {
        path: "/recipe",
        children: [
          { index: true, element: <Recipe /> },
          { path: "/recipe/:rId", element: <RecipeDetails /> },
          { path: "/recipe/:rId/edit", element: <RecipeManage /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
