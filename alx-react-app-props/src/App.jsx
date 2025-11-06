import UserContext from "./UserContext";
import ProfilePage from "./ProfilePage";
// or "UserProfile" if that is what your assignment expects!

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
