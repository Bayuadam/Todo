import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div style={{ width: "40%", margin: "0 auto" }}>
      {props.todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default Todos;
