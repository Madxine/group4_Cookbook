import { ContentfulContext } from "../context/ContentfulContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../css/Sidebar.css";
import { NutritionContext } from "../context/NutritionContext";
export default function Sidebar() {
  const { recipes } = useContext(ContentfulContext);
  const { setRecipeIndex } = useContext(NutritionContext);

  return (
    <ul className="sidebar">
      {recipes.items.length > 0 &&
        recipes.items.map((recipe, ind) => (
          <NavLink
            className="sidebar__item"
            key={recipe.sys.id}
            to={`/${ind}/ingredients`}
            onClick={() => setRecipeIndex(ind)}
          >
            <h2>{recipe.fields.waffles}</h2>
            <img
              className="sidebar__item-img"
              src={recipe.fields.wafflePicture[1]?.fields?.file.url}
              alt="something"
            />
          </NavLink>
        ))}
    </ul>
  );
}
