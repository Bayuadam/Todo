import React, { useState } from "react";
import Todos from "./components/Todos";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Belajar Web Development",
      completed: true,
      deleted: false,
    },
    {
      id: 2,
      title: "Bermain Futsal",
      completed: false,
      deleted: false,
    },
    {
      id: 3,
      title: "Belajar Mandiri",
      completed: false,
      deleted: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    // console.log(todoId, );
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const deleteTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.deleted = true;
      }
      return todo;
    });
    setTodos(deleteTodos);
  };

  return (
    <div style={{ textAlign: "center", padding: "12px" }}>
      <h1 style={{ fontSize: "36px" }}>My Todo List</h1>
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        toggleDeleted={deleteTodo}
      />
    </div>
  );
}

export default App;
