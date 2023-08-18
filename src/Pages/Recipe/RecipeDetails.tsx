import React from "react";
import RecipeHeader from "../../components/Recipe/RecipeHeader";
import RecipeBody from "../../components/Recipe/RecipeBody";
import RecipeComments from "../../components/Recipe/RecipeComments";

// import styles from "./RecipeDetails.module.scss";

function RecipeDetails() {
  return (
    <>
      <RecipeHeader />
      <RecipeBody />
      <RecipeComments />
    </>
  );
}

export default RecipeDetails;
