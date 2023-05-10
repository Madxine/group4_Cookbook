import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ContentfulContext } from "../context/ContentfulContext";
import { NutritionContext } from "../context/NutritionContext";
import { NavLink } from "react-router-dom";
import Preparation from "./Preparation";
import "../css/Recipe.css";
import Nutrition from "./Nutrition";
import Ingredients from "./Ingredients";

export default function Recipe() {
  const { recipes } = useContext(ContentfulContext);
  const { setShallFetch } = useContext(NutritionContext);
  const { index, tab } = useParams();
  const [currentrecipe, setCurrentRecipe] = useState(0);
  // const ingredients = recipes.fields.ingridients;
  console.log(tab);

  const recipe = recipes.items[index];
  console.log(recipes);

  const prevRecipe = () => {
    setCurrentRecipe((prev) => {
      if (prev === 0) {
        return recipes.length - 1;
      }

      return prev - 1;
    });
  };

  const nextRecipe = () => {
    setCurrentRecipe((prev) => {
      if (prev === recipes.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    Object.keys(recipe).length > 0 && (
      <div className="recipe_container">
        <div className="button">
          <button onClick={prevRecipe} className="prev">
            &larr; Previous
          </button>
        </div>

        <div className="recipe__image--wrapper">
          <figure className="recipe__pic">
            <img
              className="recipe__image"
              src={recipe.fields.wafflePicture[0].fields.file.url}
              alt={recipe?.fields.waffles}
            />
          </figure>
        </div>
        <div className="recipe__rightside">
          <div className="recipe__title">
            <h1>{recipe?.fields.waffles}</h1>
          </div>
          <nav className="bloc-tabs">
            <NavLink to={`/${index}/ingredients`} className="recipe__tab">
              <h3>Ingredients</h3>
            </NavLink>

            <NavLink to={`/${index}/preparation`} className="recipe__tab">
              <h3> Preparation</h3>
            </NavLink>

            <NavLink
              to={`/${index}/nutrients`}
              className="recipe__tab"
              onClick={() => setShallFetch(true)}
            >
              <h3> Nutrients</h3>
            </NavLink>
          </nav>

          <div className="recipe-description">
            {tab === "ingredients" ? (
              <Ingredients recipe={recipe} />
            ) : tab === "preparation" ? (
              <Preparation recipe={recipe} />
            ) : (
              <Nutrition />
            )}
          </div>
        </div>
        <div className="button">
          <button onClick={nextRecipe} className="next">
            {" "}
            Next &rarr;{" "}
          </button>
        </div>
      </div>
    )
  );
}

// fields.wafflePicture[0].fields.file.url
// fields.ingridients
