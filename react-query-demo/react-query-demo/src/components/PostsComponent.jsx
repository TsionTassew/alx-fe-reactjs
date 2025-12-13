import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

/**
 * PostsComponent
 * - fetches posts from JSONPlaceholder using useQuery
 * - demonstrates caching via staleTime and cacheTime (set in QueryClient)
 * - provides Refetch and Invalidate Cache buttons
 */

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

export default function PostsComponent() {
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery(["posts"], fetchPosts, {
    // local overrides (optional)
    // staleTime: 1000 * 60 * 2,
    // cacheTime: 1000 * 60 * 10,
    // refetchOnWindowFocus: false,
  });

  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>Posts</h2>
        <div style={{ fontSize: 14, color: "#6b7280" }}>
          {isFetching ? "Updating..." : "Cached / fetched"}
        </div>
      </div>

      <div className="controls" style={{ marginTop: 12 }}>
        <button onClick={() => refetch()}>Refetch</button>
        <button
          className="secondary"
          onClick={() => {
            // invalidate the posts cache so next render or manual refetch will fetch fresh data
            queryClient.invalidateQueries(["posts"]);
          }}
        >
          Invalidate Cache
        </button>
        <button
          className="secondary"
          onClick={() => {
            // Remove posts from cache entirely
            queryClient.removeQueries(["posts"]);
          }}
        >
          Remove From Cache
        </button>
      </div>

      {isLoading && <div className="loading">Loading posts...</div>}

      {isError && (
        <div className="error">
          Error loading posts: {error?.message || "Unknown error"}
        </div>
      )}

      {posts && (
        <div style={{ marginTop: 12 }}>
          <p style={{ marginTop: 0, color: "#6b7280" }}>
            Showing {posts.length} posts (cached according to QueryClient settings).
          </p>
          <div>
            {posts.slice(0, 10).map((p) => (
              <div key={p.id} className="post">
                <strong>{p.title}</strong>
                <p style={{ margin: "6px 0 0", color: "#374151" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}