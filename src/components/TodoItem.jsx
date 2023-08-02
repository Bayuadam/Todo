import React from "react";

const TodoItem = (props) => {
  const getTodoTitleStyle = () => {
    if (props.todo.completed === true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div
      style={{
        border: "2px solid #f4f4f4",
        fontSize: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        style={{ marginRight: "10px", height: "18px", width: "18px" }}
        onChange={() => {
          props.toggleCompleted(props.todo.id);
        }}
      />
      <p style={getTodoTitleStyle()}>{props.todo.title}</p>
    </div>
  );
};

export default TodoItem;
