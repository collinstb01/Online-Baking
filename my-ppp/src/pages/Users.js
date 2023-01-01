import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import NavbarSideBar from "../components/Nav&SideBar";
import { link } from "../constants/Link";
import Loader from "../components/Loader";

const Users = () => {
  const [dataa, setDataa] = useState([]);
  const [message, setmessage] = useState("");
  const [imageString, setImageString] = useState("");
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const [amount, setamount] = useState(0);
  const [status, setStatus] = useState("");
  const [loading, setloading] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = ({ val, amount, id, Id2 }) => {
    setShow(true);
    setImageString(val);
    setamount(amount);
    setId(id);
    setUserId(Id2);
  };

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  console.log(amount, status, id);
  useEffect(async () => {
    setloading(true);
    try {
      const response = await axios.get(`${link}/admin/get-users`);

      console.log(response.data);
      setDataa(response.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container-scroller d-flex">
      <NavbarSideBar />
      <div className="container-fluid page-body-wrapper">
        {/* partial:partials/_settings-panel.html */}

        {/* partial */}
        <div className="main-panel w-100">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">Dashboard</h3>
            </div>

            <div className="row">
              <div className="col grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">
                      <i className="fas fa-table" />
                      Deposits
                    </h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Account Balance</th>
                            <th>Address</th>
                            <th>Id</th>
                            <th>Created At</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dataa.users.map((val) => (
                            <tr>
                              <td className="font-weight-bold">
                                <img src={val.img} alt="" />
                              </td>
                              <td>{val.name}</td>
                              <td>
                                <p className="">{val.accountBalance}</p>
                              </td>
                              <td>
                                <p className="">{val.address}</p>
                              </td>
                              <td>
                                <label className="badge-pill">{val._id}</label>
                              </td>

                              <td>
                                <label className="badge-pill">
                                  {val.createdAt.slice(0, 10)}
                                </label>
                              </td>
                              <td>
                                <Button
                                  onClick={() => {
                                    handleShow({
                                      val: val.img,
                                      amount: val.amount,
                                      id: val._id,
                                      Id2: val.id,
                                    });
                                  }}
                                >
                                  Details
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>User Profile Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5 className="my-3">{message}</h5>
                <div className="mt-3">
                  <h5>User Profile Image</h5>
                  <img src={imageString} className="payment__image mt-3" />
                </div>
              </Modal.Body>
            </Modal>
            {/* </div> */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-md-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center mb-3 mb-md-0">
                        <button className="btn btn-social-icon btn-facebook btn-rounded">
                          <i className="fab fa-facebook-f" />
                        </button>
                        <div className="ml-4">
                          <h5 className="mb-0">Facebook</h5>
                          <p className="mb-0">813 friends</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3 mb-md-0">
                        <button className="btn btn-social-icon btn-twitter btn-rounded">
                          <i className="fab fa-twitter" />
                        </button>
                        <div className="ml-4">
                          <h5 className="mb-0">Twitter</h5>
                          <p className="mb-0">9000 followers</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3 mb-md-0">
                        <button className="btn btn-social-icon btn-google btn-rounded">
                          <i className="fab fa-google-plus-g" />
                        </button>
                        <div className="ml-4">
                          <h5 className="mb-0">Google plus</h5>
                          <p className="mb-0">780 friends</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-social-icon btn-linkedin btn-rounded">
                          <i className="fab fa-linkedin-in" />
                        </button>
                        <div className="ml-4">
                          <h5 className="mb-0">Linkedin</h5>
                          <p className="mb-0">1090 connections</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* content-wrapper ends */}
          {/* partial:partials/_footer.html */}
          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                Copyright © 2018. All rights reserved.
              </span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                Hand-crafted &amp; made with{" "}
                <i className="far fa-heart text-danger" />
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Users;
