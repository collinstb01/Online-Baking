import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Payment = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [paymentData, setPaymentData] = useState({
    amount: 0,
    paymentMethod: "",
  });

  const handleChange = (e) => {
    setPaymentData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (paymentData.amount <= 0) {
      setError("Please Feel In the Neccessary Details");
    } else {
      setError("");
    }
  };

  const handlePayment = () => {
    if (paymentData.amount <= 0) {
      return setError("Please Feel In the Neccessary Details");
    }
    localStorage.setItem("payment-amout", JSON.stringify(paymentData.amount));
    route();
  };
  function route() {
    navigate("/user/deposit/manual");
  }
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
        style={{ minHeight: "calc(100vh - 576px)" }}
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
                <h2 className="page-title text-white">Payment Preview</h2>
              </div>
            </div>
          </div>
        </section>
        <nav className="navbar navbar-expand-lg section--bg2 bottom-menu p-0">
          <div className="container-lg">
            <button
              className="navbar-toggler text-white align-items-center py-2 ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#bottomMenu"
              aria-controls="bottomMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <p className="d-flex align-items-center">
                <span className="fs--14px me-2" />
                <i className="las la-bars" />
              </p>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="bottomMenu"
            >
              <ul className="navbar-nav text-center"></ul>
            </div>
          </div>
        </nav>
        <div className="=">
          <div className="account-form me">
            <div className="form-group">
              <label htmlFor="amount" className="mt-4">
                Amount *
              </label>
              <input
                type="number"
                placeholder="Enter Amout To Deposit"
                className="form--control mb-5"
                name="amount"
                value={paymentData.amount}
                required
                onChange={handleChange}
              />
              <div className="select">
                <select
                  name="payableMethod"
                  id=""
                  value={paymentData.paymentMethod}
                >
                  <option selected disabled>
                    Make a selection
                  </option>
                  <option value="smartsaver">SMARTSAVERS ACCOUNT</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <section
          className="pt-100 pb-100 bg_img"
          style={{
            backgroundImage:
              'url(" https://smartsavecontribution.com/assets/templates/basic/images/elements/bg1.jpg ")',
          }}
        >
          <div className="container">
            <div className="row justify-content-center mb-none-30">
              <div className="col-xl-4 col-lg-5 col-md-7 col-sm-9">
                <div className="card border--base">
                  <div className="card-body">
                    <ul className="caption-list text-center">
                      <li className="justify-content-center">
                        <div className="div d-flex">
                          <img
                            src={require("./dollar.png")}
                            alt="Image"
                            className="img1"
                          />
                          <img
                            src={require("./smart.jpg")}
                            alt="Image"
                            className="w-50 img2"
                          />
                        </div>
                      </li>
                      <li className="justify-content-between">
                        Amount:
                        <strong>{paymentData.amount} USD</strong>
                      </li>
                      <li className="justify-content-between">
                        Charge:
                        <strong>0 USD</strong>
                      </li>
                      <li className="justify-content-between">
                        Payable: <strong> {paymentData.amount}</strong>
                      </li>
                      <li className="justify-content-between">
                        Conversion Rate: <strong>1 USD = 1 USD</strong>
                      </li>
                      <li className="justify-content-between">
                        In USD:
                        <strong>{paymentData.amount}</strong>
                      </li>
                    </ul>
                    <button
                      className="mt-3 btn btn-secondary"
                      onClick={handlePayment}
                      disabled={paymentData.amount <= 0 ? "true" : ""}
                    >
                      Pay Now
                    </button>
                    <p>{error && error}</p>
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

export default Payment;
