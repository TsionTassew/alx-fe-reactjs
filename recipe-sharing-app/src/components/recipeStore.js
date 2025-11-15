// src/recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],             // all recipes
  searchTerm: '',          // current search text
  filteredRecipes: [],     // filtered recipes
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(term);
  },
  addRecipe: (recipe) => set(state => ({
    recipes: [...state.recipes, recipe],
    filteredRecipes: [...state.filteredRecipes, recipe]
  })),
  filterRecipes: (term = '') => {
    const search = term || get().searchTerm;
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(search.toLowerCase())
      )
    }));
  }
}));
