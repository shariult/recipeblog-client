import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { FaUtensils, FaClock, FaTrash } from "react-icons/fa";
import useFetchGet from "../../hooks/useFetchGet";

import Header from "../../components/Header";
import Loading from "../../components/Loading";

function Recipe({ currentUser }) {
  // Getting Single Recipe
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: recipe, isLoading, error } = useFetchGet("/api/recipes/" + id);
  const ingredients = recipe && recipe.ingredients.split("|");
  const methods = recipe && recipe.methods.split("|");

  // Deleting Single Recipe
  const [delError, setDelError] = useState("");
  function handleDeleteRecipe() {
    const fetchURL = `/api/recipes/${id}?uId=${currentUser.user.id}`;
    const fetchOptions = {
      method: "DELETE",
      headers: {
        Authorization: `bearer ${currentUser.jwtToken}`,
        "Content-Type": "application/json",
      },
    };
    fetch(fetchURL, fetchOptions)
      .then((res) => {
        // if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
        return res.json();
      })
      .then((resData) => {
        if (resData.error) setDelError(`${resData.error.message}`);
        navigate("/");
      })
      .catch((err) => {
        setDelError(err.message);
      });
  }

  return (
    <main className="main">
      {isLoading && (
        <div style={{ padding: "30vh 0" }}>
          <Loading />
        </div>
      )}
      {delError && <div>{delError}</div>}
      {recipe && (
        <Header
          secondHeading={recipe.title}
          subHeading={`${recipe.author.fullName}`}
          backgroundImage={`url(${recipe.image})`}
        />
      )}
      {recipe && (
        <div className="recipe__container">
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
          <h3 className="heading-3 my-24">Ingredients:</h3>
          <ol className="recipe__list recipe__ing">
            {ingredients.map((ingredient, idx) => (
              <li key={idx} className="recipe__item">
                {ingredient}
              </li>
            ))}
          </ol>
          <h3 className="heading-3 my-24">Cooking Method:</h3>
          <ol className="recipe__list">
            {methods.map((method, idx) => (
              <li key={idx} className="recipe__item">
                {method}
              </li>
            ))}
          </ol>
          <Link to="/" className="btn btn--primary my-24 mr-12 p-12">
            &larr;&nbsp;Go Back
          </Link>
          {recipe.author._id === currentUser.user.id && (
            <button
              className="btn btn--secondary btn--delete my-24"
              onClick={() => {
                handleDeleteRecipe(recipe._id);
              }}
            >
              <FaTrash />
            </button>
          )}
        </div>
      )}
      {error && (
        <section className="section-error">
          <p className="error">{error}</p>
        </section>
      )}
    </main>
  );
}

export default Recipe;
