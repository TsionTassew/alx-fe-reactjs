// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const filterRecipes = useRecipeStore(state => state.filterRecipes);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  const handleSubmit = (e) => {
    e.preventDefault();       // prevent page reload
    setSearchTerm(input);     // update the searchTerm in store
    filterRecipes(input);     // filter recipes based on input
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '8px', width: '70%', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>Search</button>
    </form>
  );
};
<SearchBar />   // just include it above the recipe list
{filteredRecipes.map(recipe => (
  <div key={recipe.id}>
    <h3>{recipe.title}</h3>
    <Link to={`/recipe/${recipe.id}`}>View Details</Link>
  </div>
))}


export default SearchBar;
