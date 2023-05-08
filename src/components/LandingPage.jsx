import React from 'react'
import videoBackground from '../assets/mixkit-fruit-shaped-candies-sliding-on-a-surface-40803.mp4';
import '../css/LandingPage.css';
import { useContext } from "react";
import { ContentfulContext } from '../context/ContentfulContext';
import { Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import Recipe from './Recipe';
import Searchbar from './Searchbar';
import LogoVideo from './LogoVideo';

function LandingPage() {
    const { recipes } = useContext(ContentfulContext);
    // console.log(Object.keys(recipes).length);
  return (
    <div className='landingPage'>
         <LogoVideo/>
         <Searchbar/>
        <video autoPlay loop muted className='landingpageVideo' type='video/mp4' src={videoBackground}/>
        <div>
        <main>
        {Object.keys(recipes).length > 0 && recipes.items !== undefined && (
          <Sidebar />
          )}
          
        {/* <Routes>
          {Object.keys(recipes).length > 0 && recipes.items !== undefined && (
            <Route path="/:index/:tab" element={<Recipe/>} />
            )}
        </Routes> */}
      </main>
        </div>
    </div>
  )
}

export default LandingPage