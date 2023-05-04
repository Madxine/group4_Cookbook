export default async function spoonacularClient(ingredient) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const raw = "";

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/parseIngredients?ingredientList=${ingredient}&includeNutrition=true&language=en&apiKey=${process.env.REACT_APP_SPOONACULAR}`,
      requestOptions
    );
    const data = await res.json();
    return data[0];
  } catch (err) {
    console.log(err);
  }
}
