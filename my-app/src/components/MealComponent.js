import React from 'react';

const mealText = { backgroundColor: "white", color: "black" };

const mealTitle = { fontSize: "18px" };

const mealDescription = { fontSize: "14px", color: "gray" };

const mealCard = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
    border: "1px solid gray",
    borderRadius: "10px",
};

export const MealComponent = ({ strMeal, strMealThumb }) => {
    return (
        <div className="col">
            <div className="card flex-row border border-white">
                <img 
                className="rounded-circle border p-1 bg-danger" 
                style={{width: "100px", height: "100px"}} 
                src={strMealThumb}
                ></img>
                <div className="card-body">
                    <h3 className="fs-6 p-3 mb-2 rounded bg-danger text-white" style={{height: "auto"}}>{strMeal}</h3>
                    <p className="card-text">Some description goes here.</p>
                </div>
            </div>
        </div>
    );
};