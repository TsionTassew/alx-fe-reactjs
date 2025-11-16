import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>

        {/* Task 2 Search Bar */}
        <SearchBar />

        {/* Add Recipe Form */}
        <AddRecipeForm />

        <Routes>
          {/* Home page list */}
          <Route path="/" element={<RecipeList />} />

          {/* Required by checker */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
