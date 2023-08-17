import React from "react";
import styles from "./RecipeTagsList.module.scss";

function RecipeTagsList() {
  return (
    <ul className={styles["recipe-tags__list"]}>
      <li className={styles["recipe-tags__item"]}>Breakfast</li>
      <li className={styles["recipe-tags__item"]}>Lunch</li>
      <li className={styles["recipe-tags__item"]}>Dinner</li>
      <li className={styles["recipe-tags__item"]}>Desert</li>
      <li className={styles["recipe-tags__item"]}>Meat</li>
    </ul>
  );
}

export default RecipeTagsList;
