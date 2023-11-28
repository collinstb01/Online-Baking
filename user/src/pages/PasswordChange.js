import { Button } from "react-bootstrap";
import { useState } from "react";
import Footer from "../components/Footer";
import { link } from "../constants/Link";
import axios from "axios";
import { Alert } from "react-bootstrap";
import Navbar from "../components/Navbar";
import ProfileSettingsTabs from "../components/ProfileSettingsTabs";

const PasswordChange = () => {
  const id = JSON.parse(localStorage.getItem("user")).user._id;
  const [user, setUser] = useState([]);
  const [message, setmessage] = useState("");
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(true);
  const [formData, setFormData] = useState({
    confirmPassword: "",
    newPassword: "",
    oldPassword: "",
    id: id,
  });

  console.log(formData);
  console.log(id);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleUpdate = async () => {
    try {
      setloading(true);
      const response = await axios.patch(`${link()}/update-password`, formData);

      if (response.data) {
        console.log(response.data);
        setmessage(response.data.message);
        seterror("");
        setloading(false);
      }
    } catch (error) {
      setloading(false);
      setmessage("");
      seterror(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <div>
      <div className="preloader" style={{ opacity: 0, display: "none" }}>
        <div className="dl">
          <div className="dl__container">
            <div className="dl__corner--top" />
            <div className="dl__corner--bottom" />
          </div>
          <div className="dl__square" />
        </div>
      </div>
      <Navbar />
      <div
        className="main-wrapper"
        style={{ minHeight: "calc(100vh - 551px)" }}
      >
        <section
          className="inner-hero bg_img overlay--one"
          style={{
            backgroundImage:
              'url("https://smartsavecontribution.com/assets/images/frontend/breadcumb/60c7569dec4f01623676573.jpg")',
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 className="page-title text-white">Change password</h2>
              </div>
            </div>
          </div>
        </section>
        <ProfileSettingsTabs />
        <section
          className="pt-100 pb-100 bg_img"
          style={{
            backgroundImage:
              'url(" https://smartsavecontribution.com/assets/templates/basic/images/elements/bg1.jpg ")',
          }}
        >
          <div className="container">
            <div className="row justify-content-center mt-4">
              <div className="col-md-8">
                <div className="card border border--base">
                  <div className="card-header bg--base">
                    <h5 className="card-title m-0 p-2 text-white">
                      Change Your Password
                    </h5>
                  </div>
                  <div className="card-body">
                    <div>
                      <div className="form-group">
                        <label htmlFor="currentPassword">
                          Current Password
                        </label>
                        <div className="input-group">
                          <input
                            placeholder="Current Password"
                            type="password"
                            className="form--control"
                            name="oldPassword"
                            value={formData.oldPassword}
                            required
                            onChange={handleChange}
                            autoComplete="current-password"
                          />
                          <span className="input-group-text bg--base border--base text-white">
                            <i className="las la-user-lock" />
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="currentPassword">New Password</label>
                        <div className="input-group">
                          <input
                            placeholder="New Password"
                            type="password"
                            value={formData.newPassword}
                            className="form--control"
                            name="newPassword"
                            required
                            onChange={handleChange}
                            autoComplete="current-password"
                          />
                          <span className="input-group-text bg--base border--base text-white">
                            <i className="las la-user-lock" />
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Confirm New Password</label>
                        <div className="input-group hover-input-popup">
                          <input
                            id="password"
                            type="password"
                            placeholder="Confirm New Password"
                            className="form--control"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            required
                            onChange={handleChange}
                            autoComplete="current-password"
                          />
                          <span className="input-group-text bg--base border--base text-white">
                            <i className="la la-key" />
                          </span>
                        </div>
                      </div>

                      <Button onClick={handleUpdate}>Change Password</Button>
                      {message && (
                        <Alert variant="success" className="mt-3">
                          {message}
                        </Alert>
                      )}
                      {error && (
                        <Alert variant="danger" className="mt-3">
                          {error}
                        </Alert>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* footer section start */}
      <Footer />
      {/* footer section end */}
      {/* jQuery library */}
      {/* bootstrap js */}
      {/* slick slider js */}
      {/* scroll animation */}
      {/* main js */}
      <link
        rel="stylesheet"
        href="https://smartsavecontribution.com/assets/global/css/iziToast.min.css"
      />
    </div>
  );
};

export default PasswordChange;
