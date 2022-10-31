import React from "react";
import { Link } from "react-router-dom";

const ProfileSettingsTabs = () => {
  return (
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
          <ul className="navbar-nav text-center">
            <li>
              <Link className="" to="/user/profile-setting">
                Linkrofile
              </Link>
            </li>
            <li>
              <Link to="/user/referees">Referral</Link>
            </li>
            <li>
              <Link to="/user/change-password">Change Password</Link>
            </li>
            <li>
              <Link to="/user/transactions">Transactions</Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ProfileSettingsTabs;
