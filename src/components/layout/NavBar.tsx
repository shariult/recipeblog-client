import React, { useState } from "react";
import Container from "../ui/Container";

import styles from "./NavBar.module.scss";

function NavBar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  function navbarToggleHandler() {
    setIsNavbarOpen((prevState) => !prevState);
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
            <a href="#" className={styles["navbar__link"]}>
              Home
            </a>
          </li>
          <li className={styles["navbar__item"]}>
            <a href="#" className={styles["navbar__link"]}>
              About
            </a>
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
