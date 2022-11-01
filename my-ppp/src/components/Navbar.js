import React from "react";
import img1 from "../images/faces/face2.jpg";
import img2 from "../images/logo.svg";
import img3 from "../images/logo-mini.svg";
import img4 from "../images/faces/face5.jpg";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setShow }) => {
  const navigate = useNavigate();
  const handleRoute = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row default-layout-navbar">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo" href="index-2.html">
          <img src={img2} alt="logo" />
        </a>
        <a className="navbar-brand brand-logo-mini" href="index-2.html">
          <img src={img3} alt="logo" />
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="fas fa-bars" />
        </button>
        <ul className="navbar-nav">
          <li className="nav-item ">
            <div className="nav-link">
              {window.innerWidth <= 900 && (
                <Button onClick={() => setShow((e) => !e)}>Menu</Button>
              )}
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item dropdown d-lg-flex">
            <div className="nav-link">
              <Button onClick={handleRoute}>Logout</Button>
              <div
                className="dropdown-menu navbar-dropdown"
                aria-labelledby="languageDropdown"
              >
                <a className="dropdown-item font-weight-medium" href="#">
                  French
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item font-weight-medium" href="#">
                  Espanol
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item font-weight-medium" href="#">
                  Latin
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item font-weight-medium" href="#">
                  Arabic
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="notificationDropdown"
            >
              <a className="dropdown-item">
                <p className="mb-0 font-weight-normal float-left">
                  You have 16 new notifications
                </p>
                <span className="badge badge-pill badge-warning float-right">
                  View all
                </span>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-danger">
                    <i className="fas fa-exclamation-circle mx-0" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-medium">
                    Application Error
                  </h6>
                  <p className="font-weight-light small-text">Just now</p>
                </div>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-warning">
                    <i className="fas fa-wrench mx-0" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-medium">
                    Settings
                  </h6>
                  <p className="font-weight-light small-text">
                    Private message
                  </p>
                </div>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-info">
                    <i className="far fa-envelope mx-0" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-medium">
                    New user registration
                  </h6>
                  <p className="font-weight-light small-text">2 days ago</p>
                </div>
              </a>
            </div>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="fas fa-bars" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
