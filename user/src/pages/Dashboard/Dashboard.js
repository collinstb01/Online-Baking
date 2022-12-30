import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { link } from "../../constants/Link";
import { Spinner } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

const Dashboard = () => {
  const id = JSON.parse(localStorage.getItem("user")).user;
  const [user, setUser] = useState([]);
  const [loading, setloading] = useState(true);
  const [dr, setDe] = useState([]);
  const [tr, setTr] = useState([]);

  console.log(user);
  console.log(id);
  useEffect(async () => {
    if (id._id) {
      try {
        setloading(true);
        const user = await axios.get(`${link}/getuser/${id._id}`);

        if (user.data) {
          setUser(user.data);
          console.log(user.data);
          const filteredArr = user.data.user.transactions.filter(
            (val) => val.paymentType == "Deposit"
          );
          const filteredArr2 = user.data.user.transactions.filter(
            (val) => val.paymentType == "Transfer"
          );
          const deposits = [...filteredArr.map((val) => val.amount)];
          const Transfer = [...filteredArr2.map((val) => val.amount)];
          console.log(deposits);
          console.log(Transfer);

          setDe(deposits);
          setTr(Transfer);
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
        style={{ minHeight: "calc(100vh - 549px)" }}
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
                <h2 className="page-title text-white">Dashboard</h2>
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
            <div className="row justify-content-center gy-4">
              <div className="col-lg-6">
                <div
                  className="card-widget section--bg2 text-center bg_img"
                  style={{
                    backgroundImage:
                      'url(" https://smartsavecontribution.com/assets/templates/basic/images/elements/card-bg.png ")',
                  }}
                >
                  <span className="caption text-white mb-3">
                    Account Number
                  </span>
                  <h3 className="d-number text-white">
                    {user.user.accountNumber}
                  </h3>
                </div>
                {/* d-widget end */}
              </div>
              <div className="col-lg-6">
                <div
                  className="card-widget section--bg2 text-center bg_img"
                  style={{
                    backgroundImage:
                      'url(" https://smartsavecontribution.com/assets/templates/basic/images/elements/card-bg.png ")',
                  }}
                >
                  <span className="caption text-white mb-3">
                    Available Balance
                  </span>
                  <h3
                    className="d-number"
                    style={{ color: "green", fontWeight: "700" }}
                  >{`$${user.user.accountBalance}`}</h3>
                </div>
                {/* d-widget end */}
              </div>
            </div>
            {/* row end */}
            <div className="row justify-content-center gy-4 mt-4">
              <div className="col-lg-4 col-md-6">
                <Link to="/user/deposit" className="w-100 h-100">
                  <div
                    className="d-widget section--bg2 d-flex flex-wrap align-items-center rounded-3 bg_img h-100"
                    style={{
                      backgroundImage:
                        'url(" https://smartsavecontribution.com/assets/templates/basic/images/elements/card-bg.png ")',
                    }}
                  >
                    <div className="d-widget__content">
                      <h3 className="d-number " style={{ color: "green" }}>
                        {dr.length > 0
                          ? `$${dr.reduce((x, y) => parseInt(x) + parseInt(y))}`
                          : 0}
                      </h3>
                      <span className="caption text-white">Deposits</span>
                    </div>
                    <div className="d-widget__icon border-radius--100">
                      <i className="las la-wallet" />
                    </div>
                  </div>
                  {/* d-widget end */}
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="/withdraw/history" className="w-100 h-100">
                  <div
                    className="d-widget section--bg2 d-flex flex-wrap align-items-center rounded-3 bg_img h-100"
                    style={{
                      backgroundImage:
                        'url(" https://smartsavecontribution.com/assets/templates/basic/images/elements/card-bg.png ")',
                    }}
                  >
                    <div className="d-widget__content">
                      <h3 className="d-number " style={{ color: "red" }}>
                        {" "}
                        {tr.length > 0
                          ? `$${tr.reduce((x, y) => parseInt(x) + parseInt(y))}`
                          : 0}
                      </h3>
                      <span className="caption text-white">Withdrawals</span>
                    </div>
                    <div className="d-widget__icon border-radius--100">
                      <i className="las la-money-check" />
                    </div>
                  </div>
                  {/* d-widget end */}
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="/user/transactions" className="w-100 h-100">
                  <div
                    className="d-widget section--bg2 d-flex flex-wrap align-items-center rounded-3 bg_img h-100"
                    style={{
                      backgroundImage:
                        'url(" https://smartsavecontribution.com/assets/templates/basic/images/elements/card-bg.png ")',
                    }}
                  >
                    <div className="d-widget__content">
                      <h3 className="d-number text-white">
                        {user.user.transactions.length}
                      </h3>
                      <span className="caption text-white">Transactions</span>
                    </div>
                    <div className="d-widget__icon border-radius--100">
                      <i className="las la-exchange-alt" />
                    </div>
                  </div>
                  {/* d-widget end */}
                </Link>
              </div>
            </div>
            {/* row end */}
            <div className="col-12 mt-5">
              <div
                className="d-widget section--bg2 d-flex flex-wrap align-items-center rounded-3 bg_img h-100"
                style={{
                  backgroundImage:
                    'url(" https://smartsavecontribution.com/assets/templates/basic/images/elements/card-bg.png ")',
                }}
              >
                <label htmlFor="lastname" className="col-form-label text-white">
                  My Referral Link:
                </label>
                <div className="input-group">
                  <input
                    type="url"
                    id="ref"
                    defaultValue={`https://yoursmartsave.com?reference=${user.user.username}`}
                    className="form-control form-control-lg bg-transparent text-white"
                    readOnly
                  />
                  <button
                    type="button"
                    data-copytarget="#ref"
                    className="input-group-text bg--base text-white copybtn border-0"
                  >
                    <i className="fa fa-copy" /> &nbsp; Copy
                  </button>
                </div>
              </div>
            </div>
            <div className="row gy-4 mt-5">
              <div className="col-lg-6 w-100">
                <h4 className="mb-3">Transactions</h4>
                <div className="custom--card">
                  <div className="card-body p-0">
                    <div className="table-responsive--md">
                      <table className="table custom--table mb-0">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Trx</th>
                            <th>Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.isArray(user.user.transactions) ? (
                            user.user.transactions.map((val) => (
                              <tr>
                                <td>{val.date.toString().slice(0, 10)}</td>
                                <td>{val.id}</td>
                                <td
                                  style={{
                                    color:
                                      val.paymentType == "Transfer"
                                        ? "red"
                                        : "green",
                                    fontWeight: "700",
                                  }}
                                >
                                  ${val.amount}
                                </td>
                                <td>{val.status}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td
                                colSpan="100%"
                                className="text-center justify-content-center"
                              >
                                No Debits yet
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* dashboard section end */}
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

export default Dashboard;
