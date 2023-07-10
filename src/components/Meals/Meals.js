import React, { useState } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  const [showMeals, setShowMeals] = useState(false);

  const toggleMealsHandler = () => {
    setShowMeals((prevShowMeals) => !prevShowMeals);
  };

  return (
    <>
      <MealsSummary onClick={toggleMealsHandler} showMeals={showMeals} />
      {showMeals && <AvailableMeals />}
    </>
  );
};

export default Meals;
