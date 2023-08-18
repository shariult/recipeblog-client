import React from "react";

import styles from "./TagList.module.scss";

function TagList() {
  return (
    <ul className={styles["tags__list"]}>
      <li className={styles["tags__item"]}>Breakfast</li>
      <li className={styles["tags__item"]}>Lunch</li>
      <li className={styles["tags__item"]}>Dinner</li>
      <li className={styles["tags__item"]}>Desert</li>
      <li className={styles["tags__item"]}>Meat</li>
    </ul>
  );
}

export default TagList;
