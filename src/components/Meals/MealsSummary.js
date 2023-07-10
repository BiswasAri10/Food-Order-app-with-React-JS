import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = ({ onClick, showMeals }) => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p className={classes.paragraph}>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className={classes.paragraph}>
        Click on the button below to see our meals list which are not only cooked
        with high quality ingredients but also served in time.
      </p>
      <button className={classes.button} onClick={onClick}>
        {showMeals ? "Hide Meals" : "Show Meals"}
      </button>
    </section>
  );
};

export default MealsSummary;
