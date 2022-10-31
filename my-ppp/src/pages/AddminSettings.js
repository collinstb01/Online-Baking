import { useState, useEffect } from "react";
import img1 from "../images/faces/face2.jpg";
import img2 from "../images/logo.svg";
import img3 from "../images/logo-mini.svg";
import img4 from "../images/faces/face5.jpg";
import Navbar from "../components/Navbar";
import axios from "axios";
import { link } from "../constants/Link";
import NavbarSideBar from "../components/Nav&SideBar";
import Loader from "../components/Loader";
import {
  Alert,
  Button,
  FloatingLabel,
  Form,
  InputGroup,
} from "react-bootstrap";
// import { Spinner } from "react-bootstrap";
// import img2 from "../images/logo.svg";
// import img2 from "../images/logo.svg";
// import img2 from "../images/logo.svg";

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    password: "",
    email: "",
    accountnumber: "",
    accountName: "",
    nameOfAccount: "",
  });
  console.log(settings);
  const [message, setmessage] = useState("");
  const [dataa, setDataa] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(async () => {
    setloading(true);
    try {
      const response = await axios.get(`${link}/admin/get-setting`);

      console.log(response.data);
      setDataa(response.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);

  const handleChange = (e) => {
    setSettings((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const makeChange = async () => {
    try {
      setmessage("updating...");
      const response = await axios.post(
        `${link}/admin/admin-setting`,
        settings
      );

      if (response.data) {
        console.log(response.data);
        setmessage(response.data.message);
      }
    } catch (error) {
      console.log(error);
      if (error) {
        setloading("Failed To Update");
        // setmessage(error.response.data.message);
      }
    }
  };

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
            <div className="div">
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="email"
                  // value={settings.email}
                  onChange={handleChange}
                  placeholder="email"
                  style={{ color: "black" }}
                  defaultValue={dataa.settings[0].email}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="password"
                  // value={settings.password}
                  onChange={handleChange}
                  placeholder="password"
                  style={{ color: "black" }}
                  defaultValue={dataa.settings[0].password}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Account Number"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="accountnumber"
                  // value={settings.email}
                  onChange={handleChange}
                  placeholder="accountnumber"
                  style={{ color: "black" }}
                  defaultValue={dataa.settings[0].accountnumber}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Name of Accounts"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="accountName"
                  // value={settings.email}
                  onChange={handleChange}
                  placeholder="accountName"
                  style={{ color: "black" }}
                  defaultValue={dataa.settings[0].accountName}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Name Of Accounts"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="email"
                  // value={settings.email}
                  onChange={handleChange}
                  placeholder="email"
                  style={{ color: "black" }}
                  defaultValue={dataa.settings[0].nameOfAccount}
                />
              </FloatingLabel>
              <Button onClick={makeChange} className="my-4">
                Make Changes
              </Button>
              {message && <Alert variant="info">{message}</Alert>}
            </div>

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

export default AdminSettings;
