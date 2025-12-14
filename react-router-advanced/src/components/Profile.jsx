// src/components/Profile.jsx
import { Routes, Route, Link } from "react-router-dom"; // must include Routes and Route
import ProfileDetails from "./ProfileDetails";           // must import ProfileDetails
import ProfileSettings from "./ProfileSettings";         // must import ProfileSettings

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes defined inside Profile.jsx */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
