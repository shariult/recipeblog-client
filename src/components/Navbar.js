import React from "react";
import { Link } from "react-router-dom";

function Navbar({ currentUser, handleSignOut }) {
  const navbarLinks = document.querySelectorAll(".navbar__link");
  const navbarCheckbox = document.querySelector(".navbar__checkbox");
  navbarLinks.forEach((navbarLink) => {
    navbarLink.addEventListener("click", () => {
      navbarCheckbox.checked = false;
    });
  });
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <i className="navbar__logo">Recipe Blog</i>
        </Link>
        <input
          type="checkbox"
          name="navbar__checkbox"
          id="navbar-toggle"
          className="navbar__checkbox"
        />
        <label htmlFor="navbar-toggle" className="navbar__icon-box">
          <span className="navbar__icon">&nbsp;</span>
        </label>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
          {currentUser.isAuth && (
            <li className="navbar__item">
              <Link to="/recipe/new" className="navbar__link">
                New Recipe
              </Link>
            </li>
          )}
          {!currentUser.isAuth && (
            <li className="navbar__item">
              <Link to="/signin" className="navbar__link">
                Sign In
              </Link>
            </li>
          )}
          {!currentUser.isAuth && (
            <li className="navbar__item">
              <Link to="/signup" className="navbar__link">
                Sign Up
              </Link>
            </li>
          )}
          {currentUser.isAuth && (
            <li className="navbar__item">
              <button
                className="navbar__link navbar__logout"
                onClick={handleSignOut}
              >
                <span>Sign Out &nbsp;&mdash;&nbsp;</span>
                <span className="">{currentUser.user.fullName}</span>
                <img
                  src={currentUser.user.profileImage}
                  alt={currentUser.user.username}
                  className="navbar__profile-image"
                />
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
