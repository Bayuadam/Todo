import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const TodoItem = (props) => {
  const getTodoTitleStyle = () => {
    if (props.todo.completed === true) {
      return {
        textDecoration: "line-through",
        paddingTop: "10px",
      };
    } else {
      return { textDecoration: "none", paddingTop: "10px" };
    }
  };

  return (
    <div
      // background-color #aee1f9;
      // background-image linear-gradient(315deg, #aee1f9 0%, #f6ebe6 74%);

      style={{
        backgroundColor: "#aee1f9",
        backgroundImage: "linear-gradient(315deg, #aee1f9 0%, #f6ebe6 74%)",
        border: "1px outset #3AC2E0",
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
              inputLabel: "Fill The Input",
              input: "text",
              inputValidator: (value) => {
                if (!value) {
                  return "Please Fill out this field!";
                }
              },
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Edit",
              inputValue: props.todo.title,
              confirmButtonColor: "#198754",
              cancelButtonColor: "#dc3741",
              cancelButtonText: "Cancel",
            }).then((result) => {
              if (result.isConfirmed && result.value) {
                props.toggleEdited(props.todo.id, result.value);
                MySwal.fire({
                  title: "Success Edit Data",
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
              title: "Delete Todo",
              text: "Are you sure you want delete this item ?",
              icon: "question",
              showDenyButton: true,
              confirmButtonText: "Yes",
              confirmButtonColor: "#198754",
              denyButtonText: "No",
            }).then((result) => {
              if (result.isConfirmed) {
                props.toggleDeleted(props.todo.id);
                MySwal.fire({
                  title: "Success Delete Data",
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
