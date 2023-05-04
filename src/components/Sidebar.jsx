import { ContentfulContext } from "../context/ContentfulContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../css/Sidebar.css";
export default function Sidebar() {
  const { recipes } = useContext(ContentfulContext);

  return (
    <ul className="sidebar">
      {recipes.items.length > 0 &&
        recipes.items.map((recipe, ind) => (
          <NavLink
            className="sidebar__item"
            key={recipe.sys.id}
            to={`/${ind}/ingredients`}
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
