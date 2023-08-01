import React, { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Belajar Web Development",
      completed: false,
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

  // console.log(todos);

  return (
    //  CSS
    <div style={{ textAlign: "center", padding: "12px" }}>
      <h1 style={{ fontSize: "36px" }}>My Todo List</h1>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
