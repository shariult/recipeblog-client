import React from "react";
import Button from "../ui/Button";

import styles from "./Header.module.scss";
import headerImg from "../../assets/img/hero.jpg";

function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__img-box"]}>
        <img
          src={headerImg}
          alt="food on a table"
          className={styles["header__img"]}
        />
      </div>
      <div className={styles["header__content"]}>
        <h1 className={"heading-1 " + styles["header__title"]}>
          Whisk & Delight: A Culinary Adventure Through Flavors
        </h1>
        <p className={styles["header__sub-title"]}>
          Savor Every Bite. Embark on a Gastronomic Journey with Our Delectable
          Recipes, Culinary Tips, and Flavorful Tales
        </p>
        <Button variant="primary">Sign Up Now</Button>
      </div>
    </header>
  );
}

export default Header;
