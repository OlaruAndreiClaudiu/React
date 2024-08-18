import React from 'react';

export const MealComponent = ({strMeal, strMealThumb}) => {
    return (
        <div>
            <h3>{strMeal}</h3>
            <img width="50" height="50" src={strMealThumb}></img>
        </div>
    );
};