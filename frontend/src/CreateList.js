import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const CreateList = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Book
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            <b>Book Title</b>
          </label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={props.handleChange}
            className="d-block my-3"
          />
          <label>
            <b>Author</b>
          </label>
          <input
            type="text"
            placeholder="Author"
            name="author"
            onChange={props.handleChange}
            className="d-block my-3"
          />
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              props.createList();
            }}
          >
            Save
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateList;
