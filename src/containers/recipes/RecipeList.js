import React from "react";
import { Link } from "react-router-dom";
import { FaUtensils, FaClock } from "react-icons/fa";

function RecipeList({ recipes }) {
  return (
    <section className="section-recipes">
      <div className="cards--container">
        {recipes.map((recipe) => {
          return (
            <div className="card--3 my-64" key={recipe._id}>
              <div className="recipe">
                <div className="recipe__img-box">
                  <img
                    src={recipe.image}
                    alt="recipe-1"
                    className="recipe__img"
                  />
                </div>
                <div className="recipe__text-box">
                  <h3 className="heading-3 recipe__title">{recipe.title}</h3>
                  <p className="recipe__author">
                    by <span>{recipe.author.fullName}</span>
                  </p>
                  <div className="recipe__info-box">
                    <p className="recipe__info">
                      <FaUtensils />
                      <span className="text--bold">Servings:</span>
                      {recipe.servings}
                    </p>
                    <p className="recipe__info">
                      <FaClock />
                      <span className="text--bold">Time:</span>
                      {recipe.totalTime}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/recipe/${recipe._id}`}
                  className="btn btn--full btn--primary"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default RecipeList;
