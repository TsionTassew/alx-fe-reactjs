import React from "react";

function App() {
  return (
    <div>
      <h1>User Profile Card</h1>
      <WelcomeMessage />
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
    </div>
  );
}

export default App;
