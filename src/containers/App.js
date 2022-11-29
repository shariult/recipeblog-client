import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./Home";
import SignUp from "./signup";
import SignIn from "./signin";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClickEvents from "../components/ClickEvents";
import RecipeCreate from "./recipes/RecipeCreate";
import Recipe from "./recipes/Recipe";

import getCredentials from "../helper/credentials";

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    getCredentials(localStorage.recipeBlog23Token)
  );

  function handleSignOut() {
    setCurrentUser(getCredentials());
    navigate("/");
  }

  return (
    <div className="App">
      <Navbar currentUser={currentUser} handleSignOut={handleSignOut} />
      <Routes>
        <Route extact path="/" element={<Home />} />
        <Route
          path="/recipe/new"
          element={
            currentUser.isAuth ? (
              <RecipeCreate currentUser={currentUser} />
            ) : (
              <SignIn setCurrentUser={setCurrentUser} />
            )
          }
        />
        <Route
          path="/recipe/:id"
          element={<Recipe currentUser={currentUser} />}
        />
        <Route
          path="/signup"
          element={
            !currentUser.isAuth ? (
              <SignUp setCurrentUser={setCurrentUser} />
            ) : (
              <Home />
            )
          }
        />
        <Route
          path="/signin"
          element={
            !currentUser.isAuth ? (
              <SignIn setCurrentUser={setCurrentUser} />
            ) : (
              <Home />
            )
          }
        />
        <Route path="/click" element={<ClickEvents />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
