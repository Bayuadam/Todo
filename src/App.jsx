import React, { useState } from "react";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
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

  const editTodo = (todoId, todoValue) => {
    const editTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.title = todoValue;
      }
      return todo;
    });
    setTodos(editTodos);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === "") {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
      deleted: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center", padding: "12px" }}>
      <h1 style={{ fontSize: "36px" }}>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        toggleDeleted={deleteTodo}
        toggleEdited={editTodo}
      />
    </div>
  );
}

export default App;
