import { useState } from "react";
import useRecipeStore from "./recipeStore";

export default function EditRecipeForm({ recipe, closeForm }) {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); //  <<<<<< REQUIRED (your error)

    updateRecipe(recipe.id, {
      title,
      description,
    });

    closeForm(); 
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2>Edit Recipe</h2>

      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Save</button>
    </form>
  );
}