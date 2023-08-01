import React from "react";

const TodoItem = (props) => {
  return (
    <div style={{ border: "2px solid #f4f4f4", fontSize: "24px" }}>
      <p>{props.todo.title}</p>
    </div>
  );
};

export default TodoItem;
