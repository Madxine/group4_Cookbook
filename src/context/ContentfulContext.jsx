import { createContext } from "react";
import { useState, useEffect } from "react";
import { client } from "../Client";

export const ContentfulContext = createContext();

export default function ContentfulContextProvider(props) {
  const [recipes, setRecipes] = useState({});
  const [queryWord, setQueryWord] = useState("");
  const [animateSlide, setAnimateSlide] = useState(true);
  const [isRecipeDisplayed, setIsRecipeDisplayed] = useState(false);

  useEffect(() => {
    client
      .getEntries({
        query: queryWord,
      })
      .then((data) => setRecipes(data))
      .catch((err) => console.log(err));
  }, [queryWord]);

  useEffect(() => {
    if (animateSlide) {
      setTimeout(() => {
        setAnimateSlide(false)
      }, 4000)
    }
  }, [animateSlide])

  return (
    <ContentfulContext.Provider value={{ recipes, setQueryWord, animateSlide, setAnimateSlide, isRecipeDisplayed, setIsRecipeDisplayed }}>
      {props.children}
    </ContentfulContext.Provider>
  );
}
