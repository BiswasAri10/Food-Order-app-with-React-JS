import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Biriyani",
    description: "Finest Biriyani with egg",
    price: 250,
  },
  {
    id: "m2",
    name: "Hakka Noodles",
    description: "A special flavour",
    price: 349,
  },
  {
    id: "m3",
    name: "Burger and French Fries",
    description: "Hot and crunchy",
    price: 180,
  },
  {
    id: "m4",
    name: "Green Salad",
    description: "Healthy...and green...",
    price: 70,
  },
];

const AvailableMeals = ({ showMeals }) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));

  return (
    <section
      className={`${classes.meals} ${showMeals ? classes.show : ""}`}
    >
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;