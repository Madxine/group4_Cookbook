import "./App.css";
import { useContext } from "react";
import { ContentfulContext } from "./context/ContentfulContext";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Recipe from "./components/Recipe";
import LogoVideo from "./components/LogoVideo";
import Main from "./components/Main";
function App() {
  const { recipes } = useContext(ContentfulContext);

  console.log(Object.keys(recipes).length);
  return (
    <div className="App">
      <Main />
      <LogoVideo />

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
