import React, { useEffect, useState } from "react";
import "../styles/login.css";
import cuate from "../images/cuate.png";
import oyinlogo from "../images/oyinLogo.png";
import { useNavigate } from "react-router-dom";
import { Alert } from "bootstrap";
import axios from "axios";
import { link } from "../constants/Link";
import Loader from "../components/Loader";

const Login = () => {
  const [errorMessage, setError] = useState("");
  const navigate = useNavigate();

  const [dataa, setDataa] = useState([]);
  const [loading, setloading] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      setloading(true);
      const response = await axios.post(`${link}/admin/login-admin`, formData);

      console.log(response.data);
      if (response.data) {
        setDataa(response.data);
        navigate("/");
        localStorage.setItem("user", JSON.stringify(response.data));
        setloading(false);
      }
    } catch (error) {
      console.log(error);
      setloading(false);
    }

    if (loading) {
      return <Loader />;
    }
  };
  return (
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 mt-5">
            <img src={cuate} alt="" width="100%" />
          </div>
          <div class="col-md-6 text-center">
            <img src={oyinlogo} alt="" width="90px" class="mb-5 oyin" />
            <h1 class="welcome">Welcome Back</h1>
            <p class="please">Please sign in to your staff account</p>
            <div class="row justify-content-center">
              <div class="col-md-8">
                <form action="" onSubmit={handleLogin}>
                  <div class="input-group mb-3 gh">
                    <div class="input-group-prepend pend">
                      <span class="input-group-text">
                        {" "}
                        <i class="fa fa-envelope lope"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      class="form-control navinput"
                      placeholder="Email Address"
                      onChange={handleChange}
                      value={formData.email}
                      name="email"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend pend">
                      <span class="input-group-text">
                        <i class="fa fa-lock lock"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      class="form-control navinput"
                      placeholder="Password"
                      onChange={handleChange}
                      value={formData.password}
                      name="password"
                    />
                  </div>
                  <a href="#">
                    <input
                      type="submit"
                      class="form-control navinput"
                      value="Login"
                    />
                  </a>
                  <a href="/"> Go back</a>
                  {errorMessage && (
                    <Alert severity="error">{errorMessage}</Alert>
                  )}
                </form>
              </div>
            </div>
            <div class="pt-3">
              <span class="got">
                <a href="#" class="text-dark">
                  {" "}
                  Forgot Password?{" "}
                </a>{" "}
                Contact the IT department
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
