import React from "react";
import { MealComponent, MealsComponent } from "../components/MealComponent";

export const MealsContainer = (props) => {
    return (
      <div>
        <div>
          {props.data
            ? props.data.map((meal) => (
                <MealComponent 
                  key={meal.idMeal} 
                  strMeal={meal.strMeal} 
                  strMealThumb={meal.strMealThumb} 
                />
               ))
              : "NO DATA AVAILABLE"}
        </div>
       </div>
    );
};