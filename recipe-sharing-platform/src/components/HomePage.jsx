import React from "react";
import { Link } from "react-router-dom";
import recipes from "../data/data.json";

function HomePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md mb5"
            />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

