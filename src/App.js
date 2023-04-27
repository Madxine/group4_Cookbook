import "./App.css";
import { useContext } from "react";
import Searchbar from "./components/Searchbar";
import { ContentfulContext } from "./context/ContentfulContext";

function App() {
  const { recipes } = useContext(ContentfulContext);

  return (
    <div className="App">
      <Searchbar />
      {recipes?.total > 0 && (
        <>
          <h1> {recipes?.items[0].fields.description}</h1>
          <img
            src={recipes?.items[0].fields.wafflePicture[0].fields.file.url}
            alt={recipes?.items[0].fields.wafflePicture[0].fields.title}
          />
        </>
      )}
    </div>
  );
}

export default App;
