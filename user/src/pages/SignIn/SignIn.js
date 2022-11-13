import img from "../../assets/images/logoIcon/logo.png";
import img2 from "../../assets/images/frontend/login_bg/61e0e302523a41642128130.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { link } from "../../constants/Link";
import axios from "axios";
import { Alert } from "react-bootstrap";

const Signin = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(formData);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${link}/login`, formData);

      console.log(response);

      if (response.data) {
        console.log("boooom");
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/user/dashboard");
      }
    } catch (error) {
      if (error.response.status == 401) {
        navigate("/authorization");
        localStorage.setItem("user", JSON.stringify(error.response.data));
        return;
      }
      console.log(error);
      setError(
        error.response ? error.response.data.message : "Something Went Wrong"
      );
    }
  };

  return (
    <div>
      <div className="preloader">
        <div className="dl">
          <div className="dl__container">
            <div className="dl__corner--top" />
            <div className="dl__corner--bottom" />
          </div>
          <div className="dl__square" />
        </div>
      </div>
      <div className="main-wrapper">
        <section
          className="account-section bg_img"
          style={{
            backgroundPosition: "right",
            backgroundImage: `url(https://t4.ftcdn.net/jpg/02/83/42/57/360_F_283425759_mMxQWQOzBV8KZ0cqFAMTGLX3NBFadelF.jpg)`,
          }}
        >
          <div className="account-section-left">
            <div className="account-section-left-inner">
              <h4 className="title text-white mb-2">
                Welcome to the Smart Save
              </h4>
              <p className="text-white">
                whenever you forget your password use the button bellow to reset
                it
              </p>
              <p className="mt-xl-5 mt-3 text-white">
                Haven't an account?{" "}
                <Link to="/signup" className="text--base">
                  Signup here
                </Link>
              </p>
            </div>
          </div>
          <div className="account-section-right">
            <div className="top text-center">
              <Link to="/" className="account-logo">
                <img src={img} alt="logo" />
              </Link>
            </div>
            <div className="middle">
              <div className="account-form">
                <input
                  type="hidden"
                  name="_token"
                  //   defaultValue="rOBjMAxdCR01yJoUltm8BYpyBopYz7V5nNJBmHqQ"
                />{" "}
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    // defaultValue
                    placeholder="Email Address"
                    className="form--control"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password *</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    className="form--control"
                    name="password"
                    required
                    autoComplete="current-password"
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <div className="form-check custom--checkbox">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                        id="remember"
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Remember Me{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-md-5 text-md-end">
                    {/* <a href="password/reset.html" className="custom--cl">
                      Forgot password?
                    </a> */}
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12"></div>
                </div>
                <button onClick={handleSubmit} className="btn btn--base w-100">
                  Sign In
                </button>
                {error && (
                  <Alert variant="info" className="error text-center mt-3">
                    {error}
                  </Alert>
                )}
              </div>
            </div>
            <div className="bottom">
              <div className="row">
                <div className="col-xl-12">
                  <ul className="d-flex flex-wrap align-items-center account-short-link justify-content-center">
                    <li>
                      <a href="page/111-company-policy.html" target="blank">
                        Company Policy
                      </a>
                      ,
                    </li>
                    <li>
                      <a href="page/85-terms-of-services.html" target="blank">
                        Terms of Services
                      </a>
                      ,
                    </li>
                    <li>
                      <a href="page/84-privacy-policy.html" target="blank">
                        Privacy Policy
                      </a>
                      .
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* jQuery library */}
      {/* bootstrap js */}
      {/* scroll animation */}
      {/* main js */}
      <link rel="stylesheet" href="assets/global/css/iziToast.min.css" />
      {/* Mirrored from smartsavecontribution.com/login by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 29 Oct 2022 21:08:02 GMT */}
    </div>
  );
};

export default Signin;
