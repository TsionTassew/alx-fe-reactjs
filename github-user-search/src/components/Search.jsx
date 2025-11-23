// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]); // changed to array to use .map()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchUserData(username);

      // Ensure data.items exists and is an array
      if (data.items && data.items.length > 0) {
        setUsers(data.items);
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
            {/* ======= .map() STARTS HERE ======= */}
            {users.map((user) => (
              <div key={user.id} className="border p-2 rounded flex items-center gap-2">
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
            ))}
            {/* ======= .map() ENDS HERE ======= */}
          </div>
        )}
      </div>
    </div>
  );
}
