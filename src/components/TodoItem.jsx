import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <input
        type="checkbox"
        style={{ height: "18px", width: "18px" }}
        onChange={() => {
          props.toggleCompleted(props.todo.id);
        }}
        checked={props.todo.completed}
      />
      <p style={getTodoTitleStyle()}>{props.todo.title}</p>
      <Button
        variant="outline-danger"
        style={{
          borderRadius: "100%",
          // border: "none",
          fontSize: "16px",
        }}
        onClick={() => {
          MySwal.fire({
            title: "Hapus Todo",
            text: "Apakah Anda Yakin Ingin Menghapus Data Ini?",
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "Ya",
            confirmButtonColor: "#198754",
            denyButtonText: "Tidak",
          }).then((result) => {
            if (result.isConfirmed) {
              props.toggleDeleted(props.todo.id);
            }
          });
        }}
      >
        X
      </Button>
    </div>
  );
};

export default TodoItem;
