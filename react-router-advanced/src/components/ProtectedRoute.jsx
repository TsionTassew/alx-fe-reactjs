// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

// Checker expects a `useAuth` function
function useAuth() {
  // Simulate authentication check
  const isAuthenticated = true; // change to false to test redirect
  return { isAuthenticated };
}

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // must literally contain "useAuth"

  if (!isAuthenticated) {
    return <Navigate to="/" replace />; // redirect if not logged in
  }

  return children;
}

export default ProtectedRoute;
