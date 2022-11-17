import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";

function Example({ show, setShow, handleClose, handleShow }) {
  const [errorm, seterror] = useState("");
  const [email, setemail] = useState("");
  const [method, setmethod] = useState("");

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Withdraw Money</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGridState">
              <Form.Label>Bank Transfer</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                onChange={(e) => setmethod(e.target.value)}
              >
                <option>Choose...</option>
                <option>Bank Transfer</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setemail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              if (email == "" && method == "") {
                seterror("All fields are required");
                return;
              }

              seterror("Issufficient Funds");
            }}
          >
            Withdraw
          </Button>
        </Modal.Footer>
        {errorm && (
          <Alert key="danger" variant="danger">
            {errorm}
          </Alert>
        )}
      </Modal>
    </>
  );
}

export default Example;
