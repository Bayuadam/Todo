import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const TodoItem = (props) => {
  const getTodoTitleStyle = () => {
    if (props.todo.completed === true) {
      return { textDecoration: "line-through", paddingTop: "10px" };
    } else {
      return { textDecoration: "none", paddingTop: "10px" };
    }
  };

  return (
    <div
      style={{
        background: "#fff",
        border: "10px solid #f4f4f4",
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
      <DropdownButton
        id="dropdown-basic-button"
        variant="outline-primary"
        title="Action"
      >
        <Dropdown.Item
          onClick={() => {
            MySwal.fire({
              title: "Edit Todo List",
              inputLabel: "Masukan Text",
              input: "text",
              inputValidator: (value) => {
                if (!value) {
                  return "Anda Harus Memasukan Todo List";
                }
              },
              showCancelButton: true,
              confirmButtonText: "Edit",
              inputValue: props.todo.title,
              confirmButtonColor: "#198754",
              cancelButtonColor: "#dc3741",
              cancelButtonText: "Tidak",
            }).then((result) => {
              if (result.isConfirmed && result.value) {
                props.toggleEdited(props.todo.id, result.value);
                MySwal.fire({
                  title: "Berhasil Mengedit Todo List",
                  icon: "success",
                  timer: 1500,
                  showConfirmButton: false,
                });
              }
            });
          }}
        >
          Edit
        </Dropdown.Item>
        <Dropdown.Item
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
                MySwal.fire({
                  title: "Berhasil Menghapus Todo List",
                  icon: "success",
                  timer: 1500,
                  showConfirmButton: false,
                });
              }
            });
          }}
        >
          Delete
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default TodoItem;
