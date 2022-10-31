import Footer from "./Footer";
import Navbar from "./Navbar";
import ProfileSettingsTabs from "./ProfileSettingsTabs";
import { Link } from "react-router-dom";
const Referral = () => {
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
                <h2 className="page-title text-white">My referred Users</h2>
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
            <div className="row align-items-center mb-3">
              <div className="col-6">
                <h6>My Referred Users</h6>
              </div>
              <div className="col-6 text-end">
                <Link
                  to="/user/referral/commissions"
                  className="btn btn-sm btn--base"
                >
                  <i className="las la-list"> </i>Commission Logs
                </Link>
              </div>
            </div>
            <div className="row justify-content-center mb-none-30">
              <div className="col-lg-12">
                <div className="custom--card">
                  <div className="table-responsive--md">
                    <table className="table custom--table">
                      <thead>
                        <tr>
                          <th>S.N.</th>
                          <th>Full Name</th>
                          <th>Joined At</th>
                        </tr>
                      </thead>
                      <tbody className="list"></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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

export default Referral;
