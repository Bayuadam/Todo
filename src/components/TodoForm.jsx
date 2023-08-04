import Button from "react-bootstrap/Button";
import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [validated, setValidated] = useState(false);
  const [textValid, setTextValid] = useState("");
  const [typeValid, setTypeValid] = useState("");
  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      setTypeValid("invalid");
      setTextValid("Please fill out this field!");
      props.addTodo(title);
      setTitle("");
    } else {
      MySwal.fire({
        title: "Success Insert Data",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        setValidated(false);
        props.addTodo(title);
        setTitle("");
      });
    }
  };

  const handleChangeTitle = (e) => {
    if (e.target.value) {
      setValidated(true);
      setTypeValid("valid");
      setTextValid("Looks Good");
    } else {
      setValidated(true);
      setTypeValid("invalid");
      setTextValid("Please fill out this field!");
    }

    setTitle(e.target.value);
  };

  return (
    <div style={styles.container}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="align-items-center mx-auto">
          <Col xs="4" className="mx-auto">
            <Form.FloatingLabel label="Input Todo">
              <Form.Control
                id="validationTextarea"
                onChange={(e) => {
                  handleChangeTitle(e);
                }}
                autoComplete="off"
                value={title}
                required
                className="mb-2"
                placeholder="Add your todo"
              />
              <Form.Control.Feedback type={typeValid}>
                {textValid}
              </Form.Control.Feedback>
              <Button type="submit" variant="primary" className="mt-2">
                Add Todo
              </Button>
            </Form.FloatingLabel>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "32px",
  },
};

export default TodoForm;
