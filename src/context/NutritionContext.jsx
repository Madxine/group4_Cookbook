import { createContext, useContext, useState, useEffect } from "react";
import { ContentfulContext } from "./ContentfulContext";
import spoonacularClient from "../spoonacularClient";

export const NutritionContext = createContext();

export default function NutritionContextProvider({ children }) {
  const { recipes } = useContext(ContentfulContext);

  const [shallFetch, setShallFetch] = useState(false);
  const [recipeIndex, setRecipeIndex] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [ingInfos, setIngInfos] = useState([]);

  

  useEffect(() => {
    // console.log("Nutri ings prepared");
    if (Object.keys(recipes).length > 0) {
      setIngredients(recipes.items[recipeIndex].fields.ingridients);
      setIngInfos([]);
    }
  }, [recipes, recipeIndex]);

  useEffect(() => {
    if (shallFetch) {
      console.log("fetching");
      ingredients.forEach((ingredient) => {
        spoonacularClient(ingredient)
          .then((data) => setIngInfos((prev) => [...prev, data]))
          .catch((err) => console.log(err));
      });
    }
    setShallFetch(false);
  }, [shallFetch]);

  console.log(ingInfos);
  return (
    <NutritionContext.Provider
      value={{ ingredients, setRecipeIndex, setShallFetch, ingInfos }}
    >
      {children}
    </NutritionContext.Provider>
  );
}
