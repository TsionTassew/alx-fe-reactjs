import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../data/data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p className="text-center mt-10 text-red-500">Recipe not found!</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        ← Back to home
      </Link>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-60 object-cover rounded-lg shadow mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      <div className="bg-white p-5 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-5 space-y-1">
          {recipe.ingredients.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Preparation Steps</h2>
        <ol className="list-decimal pl-5 space-y-2">
          {recipe.steps.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
