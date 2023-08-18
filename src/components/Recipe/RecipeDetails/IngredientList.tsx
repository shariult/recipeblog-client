import React from "react";
import TagList from "../../ui/TagList";

import styles from "./IngredientList.module.scss";

function IngredientList() {
  return (
    <div className={styles["ingredients"]}>
      <h3 className="heading-3">Ingredients</h3>
      <ul className={styles["ingredients__list"]}>
        <li className={styles["ingredients__item"]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, aut!
        </li>
        <li className={styles["ingredients__item"]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, aut!
        </li>
        <li className={styles["ingredients__item"]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, aut!
        </li>
        <li className={styles["ingredients__item"]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, aut!
        </li>
        <li className={styles["ingredients__item"]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, aut!
        </li>
        <li className={styles["ingredients__item"]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, aut!
        </li>
      </ul>
      <h3 className="heading-3 mb-12">Tags</h3>
      <TagList />
    </div>
  );
}

export default IngredientList;
