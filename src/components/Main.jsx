import React from "react";
import straw from "../assets/straw.mp4";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
export default function Main() {
  return (
    <div className="Main">
      <video className="video" src={straw} autoPlay loop muted></video>
      <div className="content">
        <Searchbar />
      </div>
    </div>
  );
}
