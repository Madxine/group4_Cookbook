import React from "react";
import straw from "../assets/straw.mp4";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { ContentfulContext } from "../context/ContentfulContext";
import { Routes, Route } from "react-router-dom";
import Recipe from "./Recipe";
import '../css/Main.css';

export default function Main() {
  const { recipes, isRecipeDisplayed } = useContext(ContentfulContext);

  // console.log(Object.keys(recipes).length);
  return (
    <div className="Main">
      <video className="video" src={straw} autoPlay loop muted></video>
      <div className="content">
        <div className="head">
          <img src="https://placehold.co/600x400"/>
        </div>
        <Searchbar />
        <div className={`sidebarcontent ${isRecipeDisplayed ? 'col-rev' : ''}`}>
        {Object.keys(recipes).length > 0 && recipes.items !== undefined && (
          <Sidebar />
        )}
        <Routes>
          {Object.keys(recipes).length > 0 && recipes.items !== undefined && (
             isRecipeDisplayed && <Route path="/:index/:tab" element={<Recipe />} />
          )}
        </Routes>
      </div>
      </div>
    
    </div>
  );
}
