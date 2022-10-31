import React from "react";
import { Spinner } from "react-bootstrap";
import Navbar from "./Navbar";

const Loader = () => {
  return (
    <div className="container-scroller d-flex">
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <div className="spinners">
          <Spinner animation="border" variant="primary " />
          <h5>Loading.. Please Wait</h5>
        </div>
      </div>
    </div>
  );
};

export default Loader;
