import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Loading from "../../components/Loading";

function RecipeCreate({ currentUser }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [methods, setMethods] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleRecipeSubmit(e) {
    e.preventDefault();

    const newRecipe = {
      title,
      image,
      servings,
      totalTime,
      ingredients,
      methods,
    };

    if (newRecipe.image === "") {
      newRecipe.image = "/recipes/recipe-1.jpg";
    }

    const fetchURL = `/api/recipes?uId=${currentUser.user.id}`;
    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: `bearer ${currentUser.jwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    };

    fetch(fetchURL, fetchOptions)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
        setIsLoading(false);
        // navigate(-1);
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }

  return (
    <section className="section-recipes">
      <Header secondHeading="Create New Recipe" />
      {error && (
        <section className="section-error">
          <p className="error">{error}</p>
        </section>
      )}
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="container">
          <form className="form" onSubmit={(e) => handleRecipeSubmit(e)}>
            <div className="form__group">
              <label htmlFor="recipe-title" className="form__label">
                Recipe Title
              </label>
              <input
                type="text"
                name="recipe-title"
                placeholder="Recipe Title"
                id="recipe-title"
                className="form__input-text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="recipe-img" className="form__label">
                Recipe Image URL
              </label>
              <input
                type="text"
                name="recipe-img"
                placeholder="Recipe Image URL"
                id="recipe-img"
                className="form__input-text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="form__row">
              <div className="form__col-2">
                <div className="form__group">
                  <label htmlFor="recipe-servings" className="form__label">
                    Servings
                  </label>
                  <input
                    type="number"
                    name="recipe-servings"
                    placeholder="How many people can be served?"
                    id="recipe-servings"
                    className="form__input-text"
                    value={servings}
                    onChange={(e) => setServings(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form__col-2">
                <div className="form__group">
                  <label htmlFor="recipe-time" className="form__label">
                    Time for Cooking
                  </label>
                  <input
                    type="text"
                    name="recipe-time"
                    placeholder="Total Time required"
                    id="recipe-time"
                    className="form__input-text"
                    value={totalTime}
                    onChange={(e) => setTotalTime(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form__group">
              <label htmlFor="recipe-ing" className="form__label">
                Recipe Ingredients
              </label>
              <textarea
                name="recipe-ing"
                placeholder="Recipe Ingredients. Separate each by '|'. ie. 'Meat|Veg|Soup'"
                id="recipe-ing"
                className="form__input-text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form__group">
              <label htmlFor="recipe-ing" className="form__label">
                Recipe Methods
              </label>
              <textarea
                name="recipe-method"
                placeholder="Cooking Method. Separate each by '|'. ie. 'Meat|Veg|Soup'"
                id="recipe-method"
                className="form__input-text form__textarea"
                value={methods}
                onChange={(e) => setMethods(e.target.value)}
                required
              ></textarea>
            </div>
            <button className="btn btn--primary">Create New Recipe</button>
          </form>
        </div>
      )}
    </section>
  );
}

export default RecipeCreate;
