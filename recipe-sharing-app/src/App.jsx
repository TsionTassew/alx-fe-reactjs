// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import { useRecipeStore } from './recipeStore';
import RecipeDetails from './components/RecipeDetails'; // make sure you have this component

function App() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div>
                <AddRecipeForm />
                {recipes.map((recipe) => (
                  <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <Link to={`/recipe/${recipe.id}`}>View Details</Link>
                  </div>
                ))}
              </div>
            }
          />

          {/* Recipe Details Page */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;