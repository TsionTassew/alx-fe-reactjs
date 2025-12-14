
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import userEvent from "@testing-library/user-event";

import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
