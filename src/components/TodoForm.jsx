import Button from "react-bootstrap/Button";
import React from "react";
import { useState } from "react";
const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(title);
    setTitle("");
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div style={styles.container}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={(e) => {
            handleChangeTitle(e);
          }}
          value={title}
        />
        <Button type="submit" variant="primary" className="ms-1">
          Add Todo
        </Button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "32px",
  },
  formInput: {
    height: "66px",
    width: "40%",
    fontSize: "16px",
    padding: "0 16px",
  },
};

export default TodoForm;
