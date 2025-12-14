import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import userEvent from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build Todo App")).toBeInTheDocument();
});

test("can add a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add todo");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Test new todo" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Test new todo")).toBeInTheDocument();
});

test("can toggle todo completion", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  expect(todo).not.toHaveStyle("text-decoration: line-through");

  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("can delete a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("Delete")[0];

  fireEvent.click(deleteButton);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
