import React from "react";
import CommentList from "../Comment/CommentList";

import styles from "./RecipeComments.module.scss";
import CommentForm from "../Comment/CommentForm";

function RecipeComments() {
  return (
    <div className={styles["recipe-comments"]}>
      <h3 className="heading-3">Comments</h3>
      <CommentForm />
      <CommentList />
    </div>
  );
}

export default RecipeComments;
