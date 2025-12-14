// src/components/PostsComponent.jsx
import { useQuery } from "react-query";
import React from "react";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery("posts", fetchPosts, {
    cacheTime: 1000 * 60 * 10,           // 10 minutes
    staleTime: 1000 * 60 * 5,            // 5 minutes
    refetchOnWindowFocus: false,         // disable refetch on focus
    keepPreviousData: true,              // keep old data when refetching
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
