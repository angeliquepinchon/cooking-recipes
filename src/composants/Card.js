import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ dataRecipes }) => {
  return (
    <div className="card">
      <h2>{dataRecipes.strMeal}</h2>
      <h3>Origin : {dataRecipes.strArea}</h3>
      <img src={dataRecipes.strMealThumb} alt="image of recipe" />
      <p>{dataRecipes.strInstructions}</p>
    </div>
  );
};

export default Card;
