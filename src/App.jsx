import React, { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Belajar Web Development",
      completed: true,
    },
    {
      id: 2,
      title: "Bermain Futsal",
      completed: false,
    },
    {
      id: 3,
      title: "Belajar Mandiri",
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    //  CSS
    <div style={{ textAlign: "center", padding: "12px" }}>
      <h1 style={{ fontSize: "36px" }}>My Todo List</h1>
      <Todos todos={todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;
