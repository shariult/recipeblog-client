import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import LayoutRoot from "./Pages/LayoutRoot";
import User from "./Pages/User/User";
import UserProfile from "./Pages/User/UserProfile";
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
          { index: true, element: <User /> },
          { path: "/user/profile", element: <UserProfile /> },
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
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
