import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { link } from "../constants/Link";

const WithdrawalForm = () => {
  const [formData, setFormData] = useState({
    BeneficiaryaccNo: "",
    accName: "",
    bankName: "",
    bankAddr: "",
    swCode: "",
    routingNumber: "",
    amount: "",
    id: JSON.parse(localStorage.getItem("user")).user._id,
  });
  console.log(formData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const [user, setUser] = useState([]);
  const [loading, setloading] = useState(false);
  const handleSubmit = async () => {
    console.log("withdrawing");
    try {
      setloading(true);
      const user = await axios.post(`${link}/withdraw`, formData);

      if (user.data) {
        setUser(user.data);
        console.log(user.data);
        setloading(false);
        navigate(`/otp-authentication/${user.data.id}`);
      }
    } catch (error) {
      setloading(false);
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
                <h2 className="page-title text-white">Withdrawal</h2>
              </div>
            </div>
          </div>
        </section>
        <section
          className="pt-100 pb-100 bg_img"
          style={{
            backgroundImage:
              'url(" https://smartsavecontribution.com/assets/templates/basic/images/elements/bg1.jpg ")',
          }}
        >
          {/* dashboard section start */}
          <div className="container">
            <h1>Quick Money Transfer</h1>
            <div className="inputsboxes">
              <input
                type="text"
                name="BeneficiaryaccNo"
                value={formData.BeneficiaryaccNo}
                onChange={handleChange}
                placeholder="Beneficiary (Account Number)"
                className="inpputbox"
              />
              <input
                type="text"
                name="accName"
                value={formData.accName}
                onChange={handleChange}
                placeholder="Account Name"
                className="inpputbox"
              />
              <input
                type="text"
                name="bankAddr"
                value={formData.bankAddr}
                onChange={handleChange}
                placeholder="Bank Address"
                className="inpputbox"
              />
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                placeholder="Bank Name"
                className="inpputbox"
              />
              <input
                type="number"
                name="swCode"
                value={formData.swCode}
                onChange={handleChange}
                placeholder="Switch Code"
                className="inpputbox"
              />
              <input
                type="text"
                name="routingNumber"
                value={formData.routingNumber}
                onChange={handleChange}
                placeholder="Routing Number"
                className="inpputbox"
              />
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Amount"
                className="inpputbox"
              />
            </div>
            <div className="withdrawbtn">
              <Button
                className="withdrawbtnn"
                onClick={handleSubmit}
                disabled={
                  !formData.BeneficiaryaccNo ||
                  !formData.accName ||
                  !formData.amount ||
                  !formData.bankAddr ||
                  !formData.bankName ||
                  !formData.routingNumber ||
                  !formData.swCode
                    ? true
                    : ""
                }
              >
                {loading ? "Loading..." : "Transfer"}
              </Button>
            </div>
          </div>
          {/* dashboard section end */}
        </section>
      </div>
      <div id="detailModal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="withdraw-detail" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger btn-md"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Deposit Modal */}
      <div id="depositModal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Deposit Money</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form
              action="https://smartsavecontribution.com/user/deposit/insert"
              method="post"
            >
              <div className="modal-body">
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="FeC7ZX8cEhv1DgrwNf0EgvK2hg7YU2rYcIrRvrHc"
                />{" "}
                <input type="hidden" name="currency" />
                <div className="form-group">
                  <label htmlFor="paymentGateway" className="fw-bold">
                    Payment Method
                  </label>
                  <select
                    className="form--control"
                    name="method_code"
                    id="paymentGateway"
                  >
                    <option disabled selected value>
                      Select One
                    </option>
                    <option
                      data-currency="USD"
                      data-min_amount={1000}
                      data-max_amount={5000000}
                      data-fix_charge={0}
                      data-percent_charge={0}
                      value={1000}
                    >
                      SMARTSAVERS ACCOUNT{" "}
                    </option>
                  </select>
                  <div className="mt-3">
                    <p>
                      <small className="text--danger depositLimit mt-2" />
                    </p>
                    <p>
                      <small className="text-danger depositCharge" />
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <label className="fw-bold" htmlFor="amount">
                    Amount
                  </label>
                  <div className="input-group">
                    <input
                      id="amount"
                      type="text"
                      className="form--control"
                      name="amount"
                      placeholder={0.0}
                      defaultValue
                      required
                    />
                    <span className="input-group-text bg--base text-white border--base">
                      USD
                    </span>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger btn-md"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn--base btn-md">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
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

export default WithdrawalForm;
