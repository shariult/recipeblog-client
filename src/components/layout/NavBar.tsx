import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <Link to="/" className={styles["navbar__logo-link"]}>
            RecipeLog
          </Link>
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
            <NavLink to="/recipe/someId" className={activeNavLinkHandler} end>
              RecipeDetails
            </NavLink>
          </li>
          <li className={styles["navbar__item"]}>
            <NavLink
              to="/recipe/someId/edit"
              className={activeNavLinkHandler}
              end
            >
              Recipe Manage
            </NavLink>
          </li>
          <li className={styles["navbar__item"]}>
            <NavLink
              to="/user?mode=signin"
              className={activeNavLinkHandler}
              end
            >
              Sign
            </NavLink>
          </li>
          <li className={styles["navbar__item"]}>
            <NavLink to="/user/profile" className={activeNavLinkHandler} end>
              Profile
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
