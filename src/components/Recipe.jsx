import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContentfulContext } from "../context/ContentfulContext";
import { NutritionContext } from "../context/NutritionContext";
import { NavLink } from "react-router-dom";
import "../css/Recipe.css";
import Nutrition from "./Nutrition";

export default function Recipe() {
  const { recipes } = useContext(ContentfulContext);
  const { setShallFetch } = useContext(NutritionContext);
  const { index, tab } = useParams();

  // const ingredients = recipes.fields.ingridients;
  console.log(tab);

  const recipe = recipes.items[index];
  // console.log(recipe);
  return (
    Object.keys(recipe).length > 0 && (
      <div className="recipe_container">
        <div className="recipe__image--wrapper">
          <figure className="recipe__pic">
            <img
              className="recipe__image"
              src={recipe.fields.wafflePicture[0].fields.file.url}
              alt={recipe?.fields.waffles}
            />
            <h1 className="recipe__title">{recipe?.fields.waffles}</h1>
          </figure>
        </div>
        <div className="recipe__rightside">
          <nav className="recipe__nav">
            <NavLink to={`/${index}/ingredients`} className="recipe__tab">
              Ingredients
            </NavLink>
            <NavLink to={`/${index}/preparation`} className="recipe__tab">
              Preparation
            </NavLink>
            <NavLink
              to={`/${index}/nutrients`}
              className="recipe__tab"
              onClick={() => setShallFetch(true)}
            >
              Nutrients
            </NavLink>
          </nav>
          <div className="recipe-description">
            {tab === "ingredients" ? (
              <p>{recipe.fields.ingridients}</p>
            ) : tab === "preparation" ? (
              <p>{recipe.fields.description}</p>
            ) : (
              <Nutrition />
            )}
          </div>
        </div>
      </div>
    )
  );
}

// fields.wafflePicture[0].fields.file.url
// fields.ingridients
