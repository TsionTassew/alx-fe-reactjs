import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/blog/1">Blog Post 1</Link>
      </nav>
    </div>
  );
}

export default Home;
