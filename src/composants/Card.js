import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ dataRecipes }) => {
  return (
    <div className="card">
      <h2>{dataRecipes.strMeal}</h2>
      <h3>Origin : {dataRecipes.strArea}</h3>
      <img src={dataRecipes.strMealThumb} alt="image of recipe" />
      <button>
        <NavLink to={"/recipe/" + dataRecipes.idMeal}>See the recipe</NavLink>
      </button>
    </div>
  );
};

export default Card;
