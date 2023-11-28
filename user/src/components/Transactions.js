import { useState } from "react";
import { useEffect } from "react";
import { link } from "../constants/Link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProfileSettingsTabs from "./ProfileSettingsTabs";
import axios from "axios";
import Loader from "./Loader";

const Transactions = () => {
  const id = JSON.parse(localStorage.getItem("user")).user;
  const [user, setUser] = useState([]);
  const [loading, setloading] = useState(true);

  console.log(user);
  useEffect(async () => {
    if (id._id) {
      try {
        setloading(true);
        const user = await axios.get(`${link()}/getuser/${id._id}`);

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
                <h2 className="page-title text-white">My Transactions</h2>
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
          {/* dashboard section start */}
          <div className="container">
            <div className="row justify-content-center mb-none-30">
              <div className="col-lg-12">
                <div className="custom--card">
                  <div className="table-responsive--md">
                    <table className="table custom--table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Trx Id</th>
                          <th>Details</th>
                          <th>Amount</th>
                          {/* <th>Status</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {Array.isArray(user.user.transactions) ? (
                          user.user.transactions.map((val) => (
                            <tr>
                              <td>{val.date.toString().slice(0, 10)}</td>
                              <td>{val.id}</td>
                              <td>{val.paymentType}</td>
                              <td>{val.amount}</td>
                              {/* <td>{val.status}</td> */}
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

export default Transactions;
