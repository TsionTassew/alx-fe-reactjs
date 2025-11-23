// src/components/Search.jsx
import { useState } from "react";

export default function Search() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]); // array of users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch user data from GitHub API
  const fetchUserData = async (username) => {
    // 1. Search users by username
    const res = await fetch(`https://api.github.com/search/users?q=${username}`);
    const data = await res.json();
    if (!data.items || data.items.length === 0) return [];

    // 2. Fetch full details for each user (to get location)
    const detailedUsers = await Promise.all(
      data.items.map(async (user) => {
        const resDetail = await fetch(user.url); // user.url gives full user info
        return resDetail.json();
      })
    );
    return detailedUsers;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchUserData(username);
      if (data.length > 0) {
        setUsers(data);
      } else {
        setError("Looks like we cant find the user"); // Task 1 requirement
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="flex-1 p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      <div className="mt-4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {users.length > 0 && (
          <div className="mt-2 space-y-2">
            {users.map((user) => (
              <div key={user.id} className="border p-2 rounded flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-bold">{user.login}</p>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
                {/* Display location */}
                <p className="text-sm text-gray-600">
                  {user.location ? user.location : "Location not available"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
