import { ContentfulContext } from "../context/ContentfulContext";
import { useContext,useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Sidebar.css";
import { NutritionContext } from "../context/NutritionContext";



export default function Sidebar() {
  const { recipes, animateSlide, setIsRecipeDisplayed } = useContext(ContentfulContext);
  const { setRecipeIndex } = useContext(NutritionContext);
  
  

  return (
        
    <ul className="sidebar">
      {recipes.items.length > 0 &&
        recipes.items.map((r, ind) => (
          <NavLink to={`/${ind}/ingredients`} className="sidebar__item" onClick={() => setIsRecipeDisplayed(true)}>
           <div id="slide" className={animateSlide ? 'slide' : 'stay'} >
           <img key={r.sys.id} 
                to={`/${ind}/ingredients`}
                onClick={() => setRecipeIndex(ind)}
                onMouseOver={()=>recipes.items.length > 0 && recipes.items.map((r) => 
                  <h2 className="sidebar__item" >{r.fields.waffles}</h2>)}
                  className="sidebar__item-img"
                  src={r.fields.wafflePicture[1]?.fields?.file.url}
                  alt={r.fields.waffles}/> 
            <h2 className="sidebar__title" >{r.fields.waffles.split(' ').slice(0, 2).join(' ')}</h2>
          </div>
          </NavLink>
        ))}
     </ul>
  );
}