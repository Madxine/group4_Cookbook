import "../css/Ingredients.css";

export default function Ingredients({ recipe }) {
  const ingArr = recipe.ingridients;
  return (
    <ul className="Ingredients__list">
      {ingArr.map((ingredient, ind) => (
        <li className="Ingredients__item" key={ingredient + ind}>
          {ingredient}
        </li>
      ))}
    </ul>
  );
}
