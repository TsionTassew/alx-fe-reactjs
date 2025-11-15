import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();  // <<< REQUIRED for ALX

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/");  // <<< REQUIRED: go back to home page
  };

  return (
    <button onClick={handleDelete} style={{ color: "red" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;