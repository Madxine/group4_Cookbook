import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContentfulContext } from "../context/ContentfulContext";

export default function Recipe() {
  const { recipes } = useContext(ContentfulContext);
  const { index } = useParams();

  const recipe = recipes.items[index];
  // console.log(recipe);
  return Object.keys(recipe).length > 0 && <h1>{recipe?.fields.waffles}</h1>;
}
