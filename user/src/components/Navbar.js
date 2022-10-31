import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <div className="header__bottom">
        <div className="container">
          <nav className="navbar navbar-expand-lg p-0 align-items-center justify-content-between">
            <Link className="site-logo site-title" to="/">
              <img
                src="https://smartsavecontribution.com/assets/images/logoIcon/logo.png"
                alt="logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="menu-toggle" />
            </button>
            <div
              className="collapse navbar-collapse mt-xl-0 mt-3"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav main-menu m-auto">
                <li>
                  <Link className="activee" to="/user/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className to="/user/deposit">
                    Deposit
                  </Link>
                </li>
                <li>
                  <Link className to="/withdraw/history">
                    Withdraw
                  </Link>
                </li>
                <li>
                  <Link className to="/user/profile-setting">
                    More
                  </Link>
                </li>
              </ul>
              <div className="nav-right">
                <select className="language-select me-3 langSel">
                  <option value="en" selected>
                    English
                  </option>
                  <option value="bn">Bangla</option>
                </select>
                <Link
                  to="/login"
                  onClick={() => {
                    localStorage.removeItem("user");
                  }}
                  className="btn btn-sm py-2 custom--bg text-white"
                >
                  {" "}
                  <i className="fa fa-sign-out-alt" aria-hidden="true" /> Logout
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
