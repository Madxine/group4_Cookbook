import { useContext, useState } from "react";
import "../css/Searchbar.css";
import { ContentfulContext } from "../context/ContentfulContext";

export default function Searchbar() {
  const { setQueryWord } = useContext(ContentfulContext);
  const [input, setInput] = useState("");

  const handleInput = ({ target }) => {
    setInput(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryWord(input);
    setInput("");
    e.target.children[0].focus();
  };

  return (
    <div className="Searchbar">
      <form action="#" className="Searchbar__form" onSubmit={handleSubmit}>
        <input
          className="Searchbar__input"
          type="text"
          name="search"
          id="search"
          value={input}
          placeholder="Search for anything yummy"
          onChange={handleInput}
        />
        <button className="Searchbar__btn">Submit</button>
      </form>
    </div>
  );
}
