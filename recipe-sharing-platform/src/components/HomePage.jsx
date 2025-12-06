import { useState, useEffect } from "react";
import AddRecipeForm from "./AddRecipeForm";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>

      {/* Add Recipe Form */}
      <AddRecipeForm onAddRecipe={handleAddRecipe} />

      {/* Recipe Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">
                {recipe.summary || recipe.steps || "No summary provided."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
