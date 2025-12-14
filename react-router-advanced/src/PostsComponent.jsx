import React from 'react';
import { useQuery, useQueryClient } from 'react-query';

// 1. Define the asynchronous function to fetch the data
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  // Use useQuery hook
  const { 
    data: posts, // The fetched data
    isLoading,   // Boolean: true when the query is first fetching
    isFetching,  // Boolean: true when any fetching is happening (initial or background)
    isError,     // Boolean: true if the query errored
    error,       // The error object
    refetch,     // A function to manually trigger a refetch
    isStale,     // Boolean: true if the data is considered stale
  } = useQuery('postsData', fetchPosts, {
    // Advanced Feature: Caching Configuration
    // staleTime: 1000 * 10, // Data is considered 'fresh' for 10 seconds. 
                             // If a user navigates away and returns within 10s, 
                             // they see cached data instantly with no background refetch.
                             // Default is 0, meaning data is stale immediately.
    staleTime: 60000, // 1 minute fresh time for demonstration
  });
  
  // Get the query client instance for manual cache interactions (optional for this task, but good practice)
  const queryClient = useQueryClient();

  // Handler for manual refetch
  const handleRefetch = () => {
    // The refetch function forces a new network request regardless of staleTime.
    refetch();
    console.log("Forced refetch triggered.");
  };

  // --- Rendering States ---

  if (isLoading) {
    // Only shows on the very first fetch if no data is in the cache
    return <h2>Initial Loading...</h2>;
  }

  if (isError) {
    return <h2>An error occurred: {error.message}</h2>;
  }

  // --- Displaying Data and Status ---

  return (
    <div>
      <h3>Posts List</h3>
      
      {/* Advanced Feature: Status Indicators */}
      <p style={{ 
        color: isFetching ? 'orange' : 'green', 
        fontWeight: 'bold' 
      }}>
        Status: {isFetching ? 'Fetching in background...' : 'Data is fresh/cached.'}
      </p>
      
      <p>
        Data is currently **{isStale ? 'Stale' : 'Fresh'}** (Stale time: 60s). 
        {/*
        * Caching Demo Observation:
        * 1. On first load, status will be 'Initial Loading...' then 'Data is fresh/cached.'. Network tab shows a fetch.
        * 2. Navigate away (e.g., use a different component in App.jsx) and come back within 60s: 
        * Data renders instantly (no 'Initial Loading...'), and *isFetching* is false because data is *fresh*. No network request.
        * 3. Navigate away and come back after 60s:
        * Data renders instantly, *isFetching* quickly turns true for background refetch. Network tab shows a fetch.
        */}
      </p>

      {/* Advanced Feature: Manual Update/Refetch */}
      <button onClick={handleRefetch} disabled={isFetching}>
        {isFetching ? 'Refetching...' : 'Manually Refetch Data'}
      </button>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {posts?.slice(0, 10).map(post => ( // Displaying only the first 10 for brevity
          <li key={post.id} style={{ 
            border: '1px solid #ccc', 
            margin: '10px 0', 
            padding: '10px',
            borderRadius: '5px'
          }}>
            <strong>{post.id}. {post.title}</strong>
            <p>{post.body.substring(0, 80)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;