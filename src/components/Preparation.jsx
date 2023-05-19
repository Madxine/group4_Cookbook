import "../css/Preparation.css";
export default function Preparation({ recipe }) {
  const prepArr = recipe.description;
  const description = prepArr.split(/\d\. /);
  console.log(description);
  return (
    <ol className="list">
      {description?.map((item) => {
        if (item !== "") {
          return <li key={item}>{item}</li>;
        }
      })}
    </ol>
  );
}
