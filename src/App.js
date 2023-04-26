import "./App.css";
import { client } from "./Client";
import { useState, useEffect } from "react";
function App() {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    client
      .getEntries()
      .then((data) => setRecipes(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(recipes);
  return (
    <div className="App">
      <h1> {recipes?.items[0].fields.description}</h1>
      <img src={recipes?.items[0].fields.wafflePicture[0].fields.file.url} />
    </div>
  );
}

export default App;
