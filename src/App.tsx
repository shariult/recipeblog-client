import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home";
import ErrorPage from "./components/Pages/ErrorPage";
import LayoutRoot from "./components/Pages/LayoutRoot";
import User from "./components/Pages/User/User";
import UserProfile from "./components/Pages/User/UserProfile";
import Recipe from "./components/Pages/Recipe/Recipe";
import RecipeDetails from "./components/Pages/Recipe/RecipeDetails";
import RecipeManage from "./components/Pages/Recipe/RecipeManage";

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
