import React from "react";
import RecipeItem from "./RecipeItem";

import styles from "./RecipeList.module.scss";

function RecipeList() {
  return (
    <div className={styles["recipe-list"]}>
      <RecipeItem />
    </div>
  );
}

export default RecipeList;
