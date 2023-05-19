import { ContentfulContext } from "../context/ContentfulContext";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Sidebar.css";
import { NutritionContext } from "../context/NutritionContext";

export default function Sidebar() {
  const { recipes, animateSlide, setIsRecipeDisplayed } =
    useContext(ContentfulContext);
  const { setRecipeIndex } = useContext(NutritionContext);
  console.log(" in component: ", recipes);

  return (
    <ul className="sidebar">
      {recipes.length > 0 &&
        recipes.map((r, ind) => (
          <NavLink
            to={`/${ind}/ingredients`}
            className="sidebar__item"
            onClick={() => setIsRecipeDisplayed(true)}
          >
            <div id="slide" className={animateSlide ? "slide" : "stay"}>
              <img
                key={r.id}
                to={`/${ind}/ingredients`}
                onClick={() => setRecipeIndex(ind)}
                onMouseOver={() =>
                  recipes.length > 0 &&
                  recipes.map((r) => (
                    <h2 className="sidebar__item">{r.name}</h2>
                  ))
                }
                className="sidebar__item-img"
                src={r.url}
                alt={r.name}
              />
              <h2 className="sidebar__title">
                {r.name.split(" ").slice(0, 4).join(" ")}
              </h2>
            </div>
          </NavLink>
        ))}
    </ul>
  );
}
