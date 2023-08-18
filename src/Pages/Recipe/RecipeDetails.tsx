import React from "react";
import RecipeHeader from "../../components/Recipe/RecipeDetails/RecipeHeader";
import MethodList from "../../components/Recipe/RecipeDetails/MethodList";
import IngredientList from "../../components/Recipe/RecipeDetails/IngredientList";
import CommentForm from "../../components/Comment/CommentForm";
import CommentList from "../../components/Comment/CommentList";

import styles from "./RecipeDetails.module.scss";

function RecipeDetails() {
  return (
    <section className={styles["recipe"]}>
      <RecipeHeader />
      <div className={styles["recipe__body"]}>
        <MethodList />
        <IngredientList />
      </div>
      <div className={styles["recipe__comments"]}>
        <h3 className="heading-3">Comments</h3>
        <CommentForm />
        <CommentList />
      </div>
    </section>
  );
}

export default RecipeDetails;
