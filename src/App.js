import "./App.css";
import { useContext } from "react";
import Searchbar from "./components/Searchbar";
import { ContentfulContext } from "./context/ContentfulContext";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Recipe from "./components/Recipe";
import LogoVideo from "./components/LogoVideo";

function App() {
  const { recipes } = useContext(ContentfulContext);

  console.log(Object.keys(recipes).length);
  return (
    <div className="App">
      <LogoVideo />
      <Searchbar />
      <main>
        {Object.keys(recipes).length > 0 && recipes.items !== undefined && (
          <Sidebar />
        )}
        <Routes>
          {Object.keys(recipes).length > 0 && recipes.items !== undefined && (
            <Route path="/:index/:tab" element={<Recipe />} />
          )}
        </Routes>
      </main>
    </div>
  );
}

export default App;
