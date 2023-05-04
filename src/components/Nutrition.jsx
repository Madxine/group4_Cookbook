import { NutritionContext } from "../context/NutritionContext";
import { useContext, useState } from "react";

export default function Nutrition() {
  const { ingInfos } = useContext(NutritionContext);
  const [estimatedCostEUR, setEstimatedCostEUR] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  if (ingInfos.length > 0) {
    setTimeout(() => {
      const estimatedCostEURTemp = (
        ingInfos.reduce((acc, val) => {
          if (val.estimatedCost.value === undefined) return acc;
          return acc + val.estimatedCost.value;
        }, 0) * 0.0091
      ).toFixed(2); // 100 us cent -> 91 eur cent -> /100
      const totalCaloriesTemp = ingInfos.reduce((acc, val) => {
        if (!val.nutrition.nutrients === undefined) return acc;
        return (
          acc +
          val.nutrition.nutrients.find((el) => el.name === "Calories").amount
        );
      }, 0);
      setEstimatedCostEUR(estimatedCostEURTemp);
      setTotalCalories(totalCaloriesTemp);
    }, 700);
  }

  return (
    <div>
      <p>Estimated Cost: {estimatedCostEUR}€</p>
      <p>Calories: ca {totalCalories}</p>
    </div>
  );
}
