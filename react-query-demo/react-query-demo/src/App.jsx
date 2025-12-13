
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Keep results fresh for 2 minutes (demonstrates caching)
      staleTime: 1000 * 60 * 2,
      // Keep unused cache for 10 minutes
      cacheTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false, // optional: don't refetch automatically on focus
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <header>
          <h1>React Query — Posts Demo</h1>
        </header>
        <main>
          <PostsComponent />
        </main>
        <footer>
          <p>Data source: JSONPlaceholder — see network panel and React Query devtools for cache details.</p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}