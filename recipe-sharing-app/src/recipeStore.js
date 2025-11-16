
import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  // FAVORITES
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // RECOMMENDATIONS
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      // Mock logic: recommend some recipes user already liked
      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  // EXISTING ACTIONS FOR RECIPES
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
}));
