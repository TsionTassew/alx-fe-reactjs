// src/services/githubService.js
import axios from "axios";

// Basic user fetch
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Advanced search with query parameters
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = username ? `${username} in:login` : "";
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; // array of user objects
  } catch (error) {
    throw error;
  }
};
