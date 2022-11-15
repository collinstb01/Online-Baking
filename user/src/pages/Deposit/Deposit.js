import { useState } from "react";
import { useEffect } from "react";
import { link } from "../../constants/Link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProfileSettingsTabs from "../../components/ProfileSettingsTabs";
import axios from "axios";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

export const Deposit = () => {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const id = JSON.parse(localStorage.getItem("user")).user;
  const [user, setUser] = useState([]);
  const [loading, setloading] = useState(true);

  console.log(user);
  useEffect(async () => {
    if (id._id) {
      try {
        setloading(true);
        const user = await axios.get(`${link}/getdeposit/${id._id}`);

        if (user.data) {
          setUser(user.data);
          console.log(user.data);
          setloading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  if (loading) {
    return <Loader />;
  }
  console.log(show);
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
                <h2 className="page-title text-white">My Deposits</h2>
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
              <div className="col-lg-6">
                <h6>My Deposit History</h6>
              </div>
              <div className="col-lg-6 text-lg-end">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/user/payment");
                  }}
                  //   data-bs-toggle="modal"
                  //   data-bs-target="#depositModal"
                  className="btn btn-sm btn--base"
                >
                  <i className="las la-plus-circle" /> Deposit Now
                </button>
              </div>
            </div>
            <div className="custom--card">
              <div className="card-body p-0">
                <div className="table-responsive--md">
                  <table className="table custom--table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Trx Id</th>
                        <th>Details</th>
                        <th>Amount</th>
                        <th>Paid</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(user.deposits) ? (
                        user.deposits.map((val) => (
                          <tr>
                            <td>{val.createdAt.toString().slice(0, 10)}</td>
                            <td>{val.id}</td>
                            <td>{val.method}</td>
                            <td>{val.amount}</td>
                            <td>{val.paid}</td>
                            <td>{val.status}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="100%"
                            className="text-center justify-content-center"
                          >
                            No Transaction Yet
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
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
