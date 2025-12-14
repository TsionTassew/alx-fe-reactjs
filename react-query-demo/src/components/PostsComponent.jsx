// src/components/PostsComponent.jsx
import { useQuery } from "react-query"; // must contain useQuery
import React from "react";

const fetchPosts = async () => { // must contain fetchPosts
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // must contain URL
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery("posts", fetchPosts); 
  // must contain: data, isLoading, isError, error, useQuery, fetchPosts

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
