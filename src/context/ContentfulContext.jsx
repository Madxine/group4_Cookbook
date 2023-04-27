import { createContext } from "react";
import { useState, useEffect } from "react";
import { client } from "../Client";

export const ContentfulContext = createContext();

export default function ContentfulContextProvider(props) {
  const [recipes, setRecipes] = useState();
  const [queryWord, setQueryWord] = useState("sugar");

  useEffect(() => {
    client
      .getEntries({
        query: queryWord,
      })
      .then((data) => setRecipes(data))
      .catch((err) => console.log(err));
  }, [queryWord]);

  return (
    <ContentfulContext.Provider value={{ recipes, setQueryWord }}>
      {props.children}
    </ContentfulContext.Provider>
  );
}
