import { Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import { useRecipeStore } from './recipeStore';


function App() {
const recipes = useRecipeStore((state) => state.recipes);


return (
<div>
<h1>Recipe Sharing App</h1>
<AddRecipeForm />


{recipes.map((recipe) => (
<div key={recipe.id}>
<h3>{recipe.title}</h3>
<Link to={`/recipe/${recipe.id}`}>View Details</Link>
</div>
))}
</div>
);
}


export default App;