import React from "react";
import { MealsContainer } from "../containers/MealsContainer";
import { mockMeals } from "../assets/mockData";

export default function HomePage() {
    return (
        <div>
        <div>HomaPage component loaded</div>
        <MealsContainer data={mockMeals.meals} />
        </div>
    );
}