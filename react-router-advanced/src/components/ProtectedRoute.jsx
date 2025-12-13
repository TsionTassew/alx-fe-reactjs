import { Navigate } from "react-router-dom";

const isAuthenticated = false; // simulate login status

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
