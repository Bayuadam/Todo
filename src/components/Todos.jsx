import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div style={{ width: "40%", margin: "0 auto" }}>
      {props.todos.map((todo) => {
        return !todo.deleted ? (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={props.toggleCompleted}
            toggleDeleted={props.toggleDeleted}
            toggleEdited={props.toggleEdited}
          />
        ) : null;
      })}
    </div>
  );
};

export default Todos;
