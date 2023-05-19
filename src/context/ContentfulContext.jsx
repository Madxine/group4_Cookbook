import { createContext } from "react";
import { useState, useEffect } from "react";
// import { client } from "../Client";

export const ContentfulContext = createContext();

export default function ContentfulContextProvider(props) {
  const [recipes, setRecipes] = useState({});
  const [queryWord, setQueryWord] = useState("");
  const [animateSlide, setAnimateSlide] = useState(true);
  const [isRecipeDisplayed, setIsRecipeDisplayed] = useState(false);

  //  contentful
  // useEffect(() => {
  //   client
  //     .getEntries({
  //       query: queryWord,
  //     })
  //     .then((data) => setRecipes(data))
  //     .catch((err) => console.log(err));
  // }, [queryWord]);

  // own db
  useEffect(() => {
    const fetchDB = async () => {
      const res = await fetch(`http://localhost:8080/api?search=${queryWord}`);
      const data = await res.json();
      setRecipes(data);
    };
    fetchDB();
  }, [queryWord]);

  // useEffect(() => {
  //   const fetchDB = async () => {
  //     const res = await fetch(`http://localhost:8080/api?search=${queryWord}`);
  //     const data = await res.json();
  //     setRecipes(data);
  //   };
  // }, []);

  useEffect(() => {
    if (animateSlide) {
      setTimeout(() => {
        setAnimateSlide(false);
      }, 4000);
    }
  }, [animateSlide]);

  console.log("in context: ", recipes);

  return (
    <ContentfulContext.Provider
      value={{
        recipes,
        setQueryWord,
        animateSlide,
        setAnimateSlide,
        isRecipeDisplayed,
        setIsRecipeDisplayed,
      }}
    >
      {props.children}
    </ContentfulContext.Provider>
  );
}
