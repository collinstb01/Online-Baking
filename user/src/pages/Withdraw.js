import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Example from "./Modal";

const Withdraw = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                <h2 className="page-title text-white">My Withdrawals</h2>
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
            <div className="row align-items-center mb-3">
              <div className="col-6">
                <h6>My Withdrawal History</h6>
              </div>
              <div className="col-6 text-end">
                <button
                  type="button"
                  // data-bs-toggle="modal"
                  // data-bs-target="#withdrawModal"
                  className="btn btn-sm btn--base"
                  onClick={() => setShow(true)}
                >
                  <i className="las la-minus-circle" /> Withdraw Now
                </button>
              </div>
            </div>
            <div className="row justify-content-center mb-none-30">
              <div className="col-lg-12">
                <div className="custom--card">
                  <div className="card-body p-0">
                    <div className="table-responsive--md">
                      <table className="table custom--table">
                        <thead>
                          <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Method | TRX</th>
                            <th scope="col">Amount | Charge</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Final Amount</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              className="text-center justify-content-center"
                              colSpan="100%"
                            >
                              No Withdrawals Yet
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* dashboard section end */}
          </div>
        </section>
      </div>
      <Example
        handleClose={handleClose}
        handleShow={handleShow}
        setShow={setShow}
        show={show}
      />
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
                className="btn btn-md btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="withdrawModal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Withdraw Money</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form
              action="https://smartsavecontribution.com/user/action"
              method="post"
            >
              <input
                type="hidden"
                name="_token"
                defaultValue="cyfhMlMwzxH2GMniEIC58Beg3yA3GopxacWQK4Ri"
              />{" "}
              <input type="hidden" name="type" defaultValue="withdraw" />
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="paymentGateway" className="fw-bold">
                    Withdraw Method
                  </label>
                  <select
                    className="form--control"
                    name="id"
                    id="paymentGateway"
                    required
                  >
                    <option disabled selected value>
                      Select One
                    </option>
                    <option
                      data-currency="USD"
                      data-min_amount={1000}
                      data-max_amount={2000000}
                      data-fix_charge={0}
                      data-percent_charge={0}
                      value={1}
                    >
                      Bank Transfer{" "}
                    </option>
                  </select>
                  <div className="mt-3">
                    <p>
                      <small className="text--danger limit-info" />
                    </p>
                    <p>
                      <small className="text-danger charge-info" />
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
                      className="form--control numeric-validation"
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
                <div className="form-group mt-0">
                  <label htmlFor="verification">Authorization Mode *</label>
                  <select
                    name="verification"
                    id="verification"
                    className="form--control select"
                    required
                  >
                    <option disabled selected value>
                      Select One
                    </option>
                    <option value={2}>Email</option>
                  </select>
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

export default Withdraw;
