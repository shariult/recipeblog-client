import React from "react";
import { FaClock, FaUserAlt } from "react-icons/fa";

import styles from "./RecipeItem.module.scss";
import Button from "../ui/Button";
import UserBox from "../User/UserBox";

function RecipeItem() {
  return (
    <div className={styles["recipe-item"]}>
      <div className={styles["recipe-item__img-box"]}>
        <img
          src="/recipes/recipe-1.jpg"
          alt="Recipe book on table"
          className={styles["recipe-item__img"]}
        />
        <span className={styles["recipe-item__category"]}>Lunch</span>
      </div>
      <h3 className={`heading-3 ${styles["recipe-item__title"]}`}>Recipe 1</h3>
      <UserBox />
      <br />
      <div className={styles["recipe-item__info-box"]}>
        <div className={styles["recipe-item__info"]}>
          <span className={styles["recipe-item__icon"]}>
            <FaUserAlt />
          </span>
          <span>3 People</span>
        </div>
        <div className={styles["recipe-item__info"]}>
          <span className={styles["recipe-item__icon"]}>
            <FaClock />
          </span>
          <span>3 hours</span>
        </div>
      </div>
      <Button variant="primary" className="mb-12">
        Read More &rarr;
      </Button>
    </div>
  );
}

export default RecipeItem;
