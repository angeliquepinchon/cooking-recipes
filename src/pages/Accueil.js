import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../composants/Card";

const Accueil = () => {
  const [recipes, setRecipes] = useState([]);
  const [food, setFood] = useState("");
  const [selectedOrigin, SetSelectedOrigin] = useState("");
  const uniqueOrigin = [
    ...new Set(recipes.map((recipe, index) => recipe.strArea)),
  ];

  const getData = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + food)
      .then((res) => setRecipes(res.data.meals));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <header>
        <h1>Cooking recipes</h1>
      </header>

      <main className="container">
        <div className="container-search">
          <input
            className="container-input"
            type="text"
            onChange={(e) => setFood(e.target.value)}
            placeholder="Find : beef, tomato ..."
          />
          <button className="container-button" onClick={() => getData()}>
            OK
          </button>
        </div>
        <div className="container-origin">
          <label htmlFor="origin">choose the origin of the recipe :</label>
          <select
            id="origin"
            onChange={(e) => SetSelectedOrigin(e.target.value)}
          >
            <option value="">Please choose an origin</option>
            {uniqueOrigin.map((origin, index) => (
              <option key={index} value={origin} width="30%">
                {origin}
              </option>
            ))}
          </select>
        </div>

        <section className="container-card">
          {recipes
            .filter((element) =>
              selectedOrigin
                ? element.strArea == selectedOrigin
                : element.strArea
            )
            .map((recipe) => (
              <Card key={recipe.idMeal} dataRecipes={recipe} />
            ))}
        </section>
      </main>
    </div>
  );
};

export default Accueil;
