// src/App.jsx
import { QueryClient, QueryClientProvider } from "react-query"; // must be exact
import PostsComponent from "./components/PostsComponent"; // must be exact

const queryClient = new QueryClient(); // must be exact

function App() {
  return (
    <QueryClientProvider client={queryClient}> {/* must be exact */}
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
