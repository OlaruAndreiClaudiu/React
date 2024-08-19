import React from "react";
import { MealsContainer } from "../containers/MealsContainer";
import { mockMeals } from "../assets/mockData";
import TopbarContainer from "../containers/TopbarContainer";
import SidebarComponent from "../containers/SidebarContainer";

export default function HomePage() {
    return (
        <div className="container-fluid">
            <TopbarContainer />
            <div className="d-flex">
            <SidebarComponent />
            <MealsContainer data={mockMeals.meals} />
            </div>
        </div>
    );
}