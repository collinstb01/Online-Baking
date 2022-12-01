import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import { link } from "../constants/Link";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Example({ show, setShow, handleClose, handleShow }) {
  const [errorm, seterror] = useState("");
  const [amount, setamout] = useState("");
  const [method, setmethod] = useState("");
  const [user, setUser] = useState([]);
  const [loading, setloading] = useState(false);
  const id = JSON.parse(localStorage.getItem("user")).user;
  const navigate = useNavigate();
  useEffect(async () => {
    if (id._id) {
      try {
        setloading(true);
        const user = await axios.get(`${link}/getuser/${id._id}`);

        if (user.data) {
          setUser(user.data);
          console.log(user.data);
          setloading(false);
        }
      } catch (error) {
        setloading(false);
        console.log(error);
      }
    }
  }, []);
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

            <Form.Group controlId="formGridamount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Amount to withdraw"
                onChange={(e) => setamout(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {loading ? (
            <Button variant="primary" disabled={true}>
              Loading...
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                if (amount == "" && method == "") {
                  seterror("All fields are required");
                  return;
                }

                if (user.user.accountBalance <= amount) {
                  return seterror("Insufficient Funds");
                }
                localStorage.setItem("withdrawalamount", amount);
                navigate("/withdrawal");
              }}
            >
              Withdraw
            </Button>
          )}
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
