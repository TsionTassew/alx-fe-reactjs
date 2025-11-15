import { useRecipeStore } from '../recipeStore';


const DeleteRecipeButton = ({ id }) => {
const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);


return (
<button onClick={() => deleteRecipe(id)} style={{ color: 'red' }}>
Delete Recipe
</button>
);
};


export default DeleteRecipeButton;