import useFetchGet from "../hooks/useFetchGet";

import Header from "../components/Header";
import RecipeList from "./recipes/RecipeList";
import Loading from "../components/Loading";

function Home() {
  // Variables
  const { data: recipes, isLoading, error } = useFetchGet("/api/recipes");

  return (
    <main className="main">
      <Header
        mainHeading="Welcome to Recipe Blog"
        subHeading="A Place where only useful recipe is listed"
      />
      <div className="container pt-64">
        {isLoading && <Loading />}
        {recipes && <RecipeList recipes={recipes} />}
        {error && (
          <section className="section-error">
            <p className="error">{error}</p>
          </section>
        )}
      </div>
    </main>
  );
}

export default Home;
