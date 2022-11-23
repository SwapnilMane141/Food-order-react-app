import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import MealsAvailable from "./MealsAvailable";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <MealsAvailable></MealsAvailable>
    </Fragment>
  );
};

export default Meals;
