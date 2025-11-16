import create from "zustand";

export const useRecipeStore = create((set) => ({
  // --- Recipes ---
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updated) => set((state) => ({
    recipes: state.recipes.map(r => r.id === updated.id ? updated : r)
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(r => r.id !== id)
  })),

  // <-- INSERT setRecipes HERE -->
  setRecipes: (recipes) => set({ recipes }),

  // --- Task 2: Search/Filter ---
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // --- Task 3: Favorites ---
  favorites: [],
  addFavorite: (recipeId) => set((state) => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // --- Task 3: Recommendations ---
  recommendations: [],
  generateRecommendations: () => set((state) => ({
    recommendations: state.recipes.filter(
      recipe => !state.favorites.includes(recipe.id) && Math.random() > 0.5
    )
  })),
}));
