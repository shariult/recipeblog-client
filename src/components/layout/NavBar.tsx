import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../ui/Container";

import styles from "./NavBar.module.scss";

function NavBar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  function navbarToggleHandler() {
    setIsNavbarOpen((prevState) => !prevState);
  }
  function activeNavLinkHandler({ isActive }: { isActive: boolean }) {
    return isActive
      ? `${styles["navbar__link"]} ${styles["navbar__link--active"]}`
      : styles["navbar__link"];
  }
  return (
    <nav className={styles["navbar"]}>
      <Container className={styles["navbar__nav"]}>
        <div className={styles["navbar__logo"]}>
          <a href="index.html" className={styles["navbar__logo-link"]}>
            <img src="#" className={styles["navbar__logo-img"]} alt="#" />
          </a>
        </div>
        <ul
          className={`${styles["navbar__list"]} ${
            isNavbarOpen ? styles["navbar__toggle--open"] : ""
          }`}
        >
          <li className={styles["navbar__item"]}>
            <NavLink to="/" className={activeNavLinkHandler}>
              Home
            </NavLink>
          </li>
          <li className={styles["navbar__item"]}>
            <NavLink to="/recipe" className={activeNavLinkHandler} end>
              Recipe
            </NavLink>
          </li>
          <li className={styles["navbar__item"]}>
            <NavLink to="/recipe/someId" className={activeNavLinkHandler}>
              RecipeDetails
            </NavLink>
          </li>
          <li className={styles["navbar__item"]}>
            <NavLink to="/recipe/someId/edit" className={activeNavLinkHandler}>
              Recipe Manage
            </NavLink>
          </li>
          <li className={styles["navbar__item"]}>
            <NavLink
              to="/user?mode=signin"
              className={activeNavLinkHandler}
              end
            >
              Sign In
            </NavLink>
          </li>
          <li className={styles["navbar__item"]}>
            <NavLink
              to="/user?mode=signup"
              className={activeNavLinkHandler}
              end
            >
              Sign Up
            </NavLink>
          </li>
          <li className={styles["navbar__item"]}>
            <NavLink to="/user/profile" className={activeNavLinkHandler} end>
              User Profile
            </NavLink>
          </li>
        </ul>
        <div className={styles["navbar__toggle"]} onClick={navbarToggleHandler}>
          <span className={styles["navbar__toggle-icon"]}>&nbsp;</span>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
