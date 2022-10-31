import { useState, useEffect } from "react";
import img1 from "../images/faces/face2.jpg";
import img2 from "../images/logo.svg";
import img3 from "../images/logo-mini.svg";
import img4 from "../images/faces/face5.jpg";
import Navbar from "../components/Navbar";
import axios from "axios";
// import { Spinner } from "react-bootstrap";
// import img2 from "../images/logo.svg";
// import img2 from "../images/logo.svg";
// import img2 from "../images/logo.svg";

const Dashboard = () => {
  const [stat, setstat] = useState("");
  //   const [dataa, setDataa] = useState([]);
  //   const [loading, setloading] = useState(true);
  //   useEffect(async () => {
  //     // setloading(true);
  //     // const response = await axios.get("/dashboard-data");
  //     // try {
  //     //   console.log(response.data);
  //     //   setDataa(response.data);
  //     //   setloading(false);
  //     // } catch (error) {
  //     //   console.log(error);
  //     //   setloading(false);
  //     // }
  //   }, []);

  //   if (loading) {
  //     return <h1>Loading...</h1>;
  //   }
  return (
    <div className="container-scroller">
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        {/* partial:partials/_settings-panel.html */}
        <div className="theme-setting-wrapper">
          <div id="settings-trigger">
            <i className="fas fa-fill-drip" />
          </div>
          <div id="theme-settings" className="settings-panel">
            <i className="settings-close fa fa-times" />
            <p className="settings-heading">SIDEBAR SKINS</p>
            <div
              className="sidebar-bg-options selected"
              id="sidebar-light-theme"
            >
              <div className="img-ss rounded-circle bg-light border mr-3" />
              Light
            </div>
            <div className="sidebar-bg-options" id="sidebar-dark-theme">
              <div className="img-ss rounded-circle bg-dark border mr-3" />
              Dark
            </div>
            <p className="settings-heading mt-2">HEADER SKINS</p>
            <div className="color-tiles mx-0 px-4">
              <div className="tiles primary" />
              <div className="tiles success" />
              <div className="tiles warning" />
              <div className="tiles danger" />
              <div className="tiles info" />
              <div className="tiles dark" />
              <div className="tiles default" />
            </div>
          </div>
        </div>
        <div id="right-sidebar" className="settings-panel">
          <i className="settings-close fa fa-times" />
          <ul className="nav nav-tabs" id="setting-panel" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="todo-tab"
                data-toggle="tab"
                href="#todo-section"
                role="tab"
                aria-controls="todo-section"
                aria-expanded="true"
              >
                TO DO LIST
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="chats-tab"
                data-toggle="tab"
                href="#chats-section"
                role="tab"
                aria-controls="chats-section"
              >
                CHATS
              </a>
            </li>
          </ul>
          <div className="tab-content" id="setting-content">
            <div
              className="tab-pane fade show active scroll-wrapper ps"
              id="todo-section"
              role="tabpanel"
              aria-labelledby="todo-section"
            >
              <div className="add-items d-flex px-3 mb-0">
                <form className="form w-100">
                  <div className="form-group d-flex">
                    <input
                      type="text"
                      className="form-control todo-list-input"
                      placeholder="Add To-do"
                    />
                    <button
                      type="submit"
                      className="add btn btn-primary todo-list-add-btn"
                      id="add-task-todo"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
              <div className="list-wrapper px-3">
                <ul className="d-flex flex-column-reverse todo-list">
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" />
                        Team review meeting at 3.00 PM
                        <i className="input-helper" />
                      </label>
                    </div>
                    <i className="remove fa fa-times-circle" />
                  </li>
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" />
                        Prepare for presentation
                        <i className="input-helper" />
                      </label>
                    </div>
                    <i className="remove fa fa-times-circle" />
                  </li>
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" />
                        Resolve all the low priority tickets due today
                        <i className="input-helper" />
                      </label>
                    </div>
                    <i className="remove fa fa-times-circle" />
                  </li>
                  <li className="completed">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          className="checkbox"
                          type="checkbox"
                          defaultChecked
                        />
                        Schedule meeting for next week
                        <i className="input-helper" />
                      </label>
                    </div>
                    <i className="remove fa fa-times-circle" />
                  </li>
                  <li className="completed">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          className="checkbox"
                          type="checkbox"
                          defaultChecked
                        />
                        Project review
                        <i className="input-helper" />
                      </label>
                    </div>
                    <i className="remove fa fa-times-circle" />
                  </li>
                </ul>
              </div>
              <div className="events py-4 border-bottom px-3">
                <div className="wrapper d-flex mb-2">
                  <i className="fa fa-times-circle text-primary mr-2" />
                  <span>Feb 11 2018</span>
                </div>
                <p className="mb-0 font-weight-thin text-gray">
                  Creating component page
                </p>
                <p className="text-gray mb-0">build a js based app</p>
              </div>
              <div className="events pt-4 px-3">
                <div className="wrapper d-flex mb-2">
                  <i className="fa fa-times-circle text-primary mr-2" />
                  <span>Feb 7 2018</span>
                </div>
                <p className="mb-0 font-weight-thin text-gray">
                  Meeting with Alisa
                </p>
                <p className="text-gray mb-0 ">Call Sarah Graves</p>
              </div>
              <div
                className="ps__rail-x"
                style={{ left: "0px", bottom: "0px" }}
              >
                <div
                  className="ps__thumb-x"
                  tabIndex={0}
                  style={{ left: "0px", width: "0px" }}
                />
              </div>
              <div className="ps__rail-y" style={{ top: "0px", right: "0px" }}>
                <div
                  className="ps__thumb-y"
                  tabIndex={0}
                  style={{ top: "0px", height: "0px" }}
                />
              </div>
            </div>
            {/* To do section tab ends */}
            <div
              className="tab-pane fade"
              id="chats-section"
              role="tabpanel"
              aria-labelledby="chats-section"
            >
              <div className="d-flex align-items-center justify-content-between border-bottom">
                <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">
                  Friends
                </p>
                <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">
                  See All
                </small>
              </div>
              <ul className="chat-list">
                <li className="list active">
                  <div className="profile">
                    <img src="images/faces/face1.jpg" alt="image" />
                    <span className="online" />
                  </div>
                  <div className="info">
                    <p>Thomas Douglas</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">19 min</small>
                </li>
                <li className="list">
                  <div className="profile">
                    <img src={img1} alt="image" />
                    <span className="offline" />
                  </div>
                  <div className="info">
                    <div className="wrapper d-flex">
                      <p>Catherine</p>
                    </div>
                    <p>Away</p>
                  </div>
                  <div className="badge badge-success badge-pill my-auto mx-2">
                    4
                  </div>
                  <small className="text-muted my-auto">23 min</small>
                </li>
                <li className="list">
                  <div className="profile">
                    <img src={img1} alt="image" />
                    <span className="online" />
                  </div>
                  <div className="info">
                    <p>Daniel Russell</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">14 min</small>
                </li>
                <li className="list">
                  <div className="profile">
                    <img src="images/faces/face4.jpg" alt="image" />
                    <span className="offline" />
                  </div>
                  <div className="info">
                    <p>James Richardson</p>
                    <p>Away</p>
                  </div>
                  <small className="text-muted my-auto">2 min</small>
                </li>
                <li className="list">
                  <div className="profile">
                    <img src="images/faces/face5.jpg" alt="image" />
                    <span className="online" />
                  </div>
                  <div className="info">
                    <p>Madeline Kennedy</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">5 min</small>
                </li>
                <li className="list">
                  <div className="profile">
                    <img src="images/faces/face6.jpg" alt="image" />
                    <span className="online" />
                  </div>
                  <div className="info">
                    <p>Sarah Graves</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">47 min</small>
                </li>
              </ul>
            </div>
            {/* chat tab ends */}
          </div>
        </div>
        {/* partial */}
        {/* partial:partials/_sidebar.html */}
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#auth"
                aria-expanded="false"
                aria-controls="auth"
              >
                <i className="fas fa-window-restore menu-icon" />
                <span className="menu-title">User Pages</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="auth">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/login.html">
                      {" "}
                      Login{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/login-2.html">
                      {" "}
                      Login 2{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/register.html">
                      {" "}
                      Register{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/samples/register-2.html"
                    >
                      {" "}
                      Register 2{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/samples/lock-screen.html"
                    >
                      {" "}
                      Lockscreen{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#error"
                aria-expanded="false"
                aria-controls="error"
              >
                <i className="fas fa-exclamation-circle menu-icon" />
                <span className="menu-title">Error pages</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="error">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/error-404.html">
                      {" "}
                      404{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/error-500.html">
                      {" "}
                      500{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#general-pages"
                aria-expanded="false"
                aria-controls="general-pages"
              >
                <i className="fas fa-file menu-icon" />
                <span className="menu-title">General Pages</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="general-pages">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/samples/blank-page.html"
                    >
                      {" "}
                      Blank Page{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/profile.html">
                      {" "}
                      Profile{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/faq.html">
                      {" "}
                      FAQ{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/faq-2.html">
                      {" "}
                      FAQ 2{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/news-grid.html">
                      {" "}
                      News grid{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/timeline.html">
                      {" "}
                      Timeline{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/samples/search-results.html"
                    >
                      {" "}
                      Search Results{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/portfolio.html">
                      {" "}
                      Portfolio{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#apps"
                aria-expanded="false"
                aria-controls="apps"
              >
                <i className="fas fa-briefcase menu-icon" />
                <span className="menu-title">Apps</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="apps">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/apps/email.html">
                      {" "}
                      Email{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/apps/calendar.html">
                      {" "}
                      Calendar{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/apps/todo.html">
                      {" "}
                      Todo{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/apps/gallery.html">
                      {" "}
                      Gallery{" "}
                    </a>
                  </li>
                </ul>
                `
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#e-commerce"
                aria-expanded="false"
                aria-controls="e-commerce"
              >
                <i className="fas fa-shopping-cart menu-icon" />
                <span className="menu-title">E-commerce</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="e-commerce">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/invoice.html">
                      {" "}
                      Invoice{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/samples/pricing-table.html"
                    >
                      {" "}
                      Pricing Table{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/orders.html">
                      {" "}
                      Orders{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/documentation.html">
                <i className="far fa-file-alt menu-icon" />
                <span className="menu-title">Documentation</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* partial */}
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">Dashboard</h3>
            </div>
            <div className="row grid-margin">
              <div className="col-12">
                <div className="card card-statistics">
                  <div className="card-body">
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                      <div className="statistics-item">
                        <p>
                          <i className="icon-sm fa fa-user mr-2" />
                          New users
                        </p>
                        <h2>54000</h2>
                        <label className="badge badge-outline-success badge-pill">
                          2.7% increase
                        </label>
                      </div>
                      <div className="statistics-item">
                        <p>
                          <i className="icon-sm fas fa-hourglass-half mr-2" />
                          Avg Time
                        </p>
                        <h2>123.50</h2>
                        <label className="badge badge-outline-danger badge-pill">
                          30% decrease
                        </label>
                      </div>
                      <div className="statistics-item">
                        <p>
                          <i className="icon-sm fas fa-cloud-download-alt mr-2" />
                          Downloads
                        </p>
                        <h2>3500</h2>
                        <label className="badge badge-outline-success badge-pill">
                          12% increase
                        </label>
                      </div>
                      <div className="statistics-item">
                        <p>
                          <i className="icon-sm fas fa-check-circle mr-2" />
                          Update
                        </p>
                        <h2>7500</h2>
                        <label className="badge badge-outline-success badge-pill">
                          57% increase
                        </label>
                      </div>
                      <div className="statistics-item">
                        <p>
                          <i className="icon-sm fas fa-chart-line mr-2" />
                          Sales
                        </p>
                        <h2>9000</h2>
                        <label className="badge badge-outline-success badge-pill">
                          10% increase
                        </label>
                      </div>
                      <div className="statistics-item">
                        <p>
                          <i className="icon-sm fas fa-circle-notch mr-2" />
                          Pending
                        </p>
                        <h2>7500</h2>
                        <label className="badge badge-outline-danger badge-pill">
                          16% decrease
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div
                      className="chartjs-size-monitor"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        overflow: "hidden",
                        pointerEvents: "none",
                        visibility: "hidden",
                        zIndex: -1,
                      }}
                    >
                      <div
                        className="chartjs-size-monitor-expand"
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          overflow: "hidden",
                          pointerEvents: "none",
                          visibility: "hidden",
                          zIndex: -1,
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            width: "1000000px",
                            height: "1000000px",
                            left: 0,
                            top: 0,
                          }}
                        />
                      </div>
                      <div
                        className="chartjs-size-monitor-shrink"
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          overflow: "hidden",
                          pointerEvents: "none",
                          visibility: "hidden",
                          zIndex: -1,
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            width: "200%",
                            height: "200%",
                            left: 0,
                            top: 0,
                          }}
                        />
                      </div>
                    </div>
                    <h4 className="card-title">
                      <i className="fas fa-gift" />
                      Orders
                    </h4>
                    <canvas
                      id="orders-chart"
                      width={296}
                      height={148}
                      style={{
                        display: "block",
                        width: "296px",
                        height: "148px",
                      }}
                      className="chartjs-render-monitor"
                    />
                    <div
                      id="orders-chart-legend"
                      className="orders-chart-legend"
                    >
                      <ul className="legend0">
                        <li>
                          <span
                            className="legend-label"
                            style={{ backgroundColor: "#392c70" }}
                          />
                          Delivered
                        </li>
                        <li>
                          <span
                            className="legend-label"
                            style={{ backgroundColor: "#d1cede" }}
                          />
                          Estimated
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div
                      className="chartjs-size-monitor"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        overflow: "hidden",
                        pointerEvents: "none",
                        visibility: "hidden",
                        zIndex: -1,
                      }}
                    >
                      <div
                        className="chartjs-size-monitor-expand"
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          overflow: "hidden",
                          pointerEvents: "none",
                          visibility: "hidden",
                          zIndex: -1,
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            width: "1000000px",
                            height: "1000000px",
                            left: 0,
                            top: 0,
                          }}
                        />
                      </div>
                      <div
                        className="chartjs-size-monitor-shrink"
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          overflow: "hidden",
                          pointerEvents: "none",
                          visibility: "hidden",
                          zIndex: -1,
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            width: "200%",
                            height: "200%",
                            left: 0,
                            top: 0,
                          }}
                        />
                      </div>
                    </div>
                    <h4 className="card-title">
                      <i className="fas fa-chart-line" />
                      Sales
                    </h4>
                    <h2 className="mb-5">
                      56000{" "}
                      <span className="text-muted h4 font-weight-normal">
                        Sales
                      </span>
                    </h2>
                    <canvas
                      id="sales-chart"
                      width={296}
                      height={148}
                      style={{
                        display: "block",
                        width: "296px",
                        height: "148px",
                      }}
                      className="chartjs-render-monitor"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">
                      <i className="fas fa-table" />
                      Sales Data
                    </h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Customer</th>
                            <th>Item code</th>
                            <th>Orders</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="font-weight-bold">
                              Clifford Wilson
                            </td>
                            <td className="text-muted">PT613</td>
                            <td>350</td>
                            <td>
                              <label className="badge badge-success badge-pill">
                                Dispatched
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="font-weight-bold">Mary Payne</td>
                            <td className="text-muted">ST456</td>
                            <td>520</td>
                            <td>
                              <label className="badge badge-warning badge-pill">
                                Processing
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="font-weight-bold">Adelaide Blake</td>
                            <td className="text-muted">CS789</td>
                            <td>830</td>
                            <td>
                              <label className="badge badge-danger badge-pill">
                                Failed
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="font-weight-bold">Adeline King</td>
                            <td className="text-muted">LP908</td>
                            <td>579</td>
                            <td>
                              <label className="badge badge-primary badge-pill">
                                Delivered
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="font-weight-bold">Bertie Robbins</td>
                            <td className="text-muted">HF675</td>
                            <td>790</td>
                            <td>
                              <label className="badge badge-info badge-pill">
                                On Hold
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">
                      <i className="fas fa-calendar-alt" />
                      Calendar
                    </h4>
                    <div id="inline-datepicker-example" className="datepicker">
                      <div className="datepicker datepicker-inline">
                        <div className="datepicker-days" style={{}}>
                          <table className="table-condensed">
                            <thead>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="datepicker-title"
                                  style={{ display: "none" }}
                                />
                              </tr>
                              <tr>
                                <th className="prev">«</th>
                                <th colSpan={5} className="datepicker-switch">
                                  October 2022
                                </th>
                                <th className="next">»</th>
                              </tr>
                              <tr>
                                <th className="dow">Su</th>
                                <th className="dow">Mo</th>
                                <th className="dow">Tu</th>
                                <th className="dow">We</th>
                                <th className="dow">Th</th>
                                <th className="dow">Fr</th>
                                <th className="dow">Sa</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td
                                  className="old day"
                                  data-date={1664064000000}
                                >
                                  25
                                </td>
                                <td
                                  className="old day"
                                  data-date={1664150400000}
                                >
                                  26
                                </td>
                                <td
                                  className="old day"
                                  data-date={1664236800000}
                                >
                                  27
                                </td>
                                <td
                                  className="old day"
                                  data-date={1664323200000}
                                >
                                  28
                                </td>
                                <td
                                  className="old day"
                                  data-date={1664409600000}
                                >
                                  29
                                </td>
                                <td
                                  className="old day"
                                  data-date={1664496000000}
                                >
                                  30
                                </td>
                                <td className="day" data-date={1664582400000}>
                                  1
                                </td>
                              </tr>
                              <tr>
                                <td className="day" data-date={1664668800000}>
                                  2
                                </td>
                                <td className="day" data-date={1664755200000}>
                                  3
                                </td>
                                <td className="day" data-date={1664841600000}>
                                  4
                                </td>
                                <td className="day" data-date={1664928000000}>
                                  5
                                </td>
                                <td className="day" data-date={1665014400000}>
                                  6
                                </td>
                                <td className="day" data-date={1665100800000}>
                                  7
                                </td>
                                <td className="day" data-date={1665187200000}>
                                  8
                                </td>
                              </tr>
                              <tr>
                                <td className="day" data-date={1665273600000}>
                                  9
                                </td>
                                <td className="day" data-date={1665360000000}>
                                  10
                                </td>
                                <td className="day" data-date={1665446400000}>
                                  11
                                </td>
                                <td className="day" data-date={1665532800000}>
                                  12
                                </td>
                                <td className="day" data-date={1665619200000}>
                                  13
                                </td>
                                <td className="day" data-date={1665705600000}>
                                  14
                                </td>
                                <td className="day" data-date={1665792000000}>
                                  15
                                </td>
                              </tr>
                              <tr>
                                <td className="day" data-date={1665878400000}>
                                  16
                                </td>
                                <td className="day" data-date={1665964800000}>
                                  17
                                </td>
                                <td className="day" data-date={1666051200000}>
                                  18
                                </td>
                                <td className="day" data-date={1666137600000}>
                                  19
                                </td>
                                <td className="day" data-date={1666224000000}>
                                  20
                                </td>
                                <td className="day" data-date={1666310400000}>
                                  21
                                </td>
                                <td className="day" data-date={1666396800000}>
                                  22
                                </td>
                              </tr>
                              <tr>
                                <td className="day" data-date={1666483200000}>
                                  23
                                </td>
                                <td className="day" data-date={1666569600000}>
                                  24
                                </td>
                                <td className="day" data-date={1666656000000}>
                                  25
                                </td>
                                <td className="day" data-date={1666742400000}>
                                  26
                                </td>
                                <td className="day" data-date={1666828800000}>
                                  27
                                </td>
                                <td className="day" data-date={1666915200000}>
                                  28
                                </td>
                                <td className="day" data-date={1667001600000}>
                                  29
                                </td>
                              </tr>
                              <tr>
                                <td
                                  className="today day"
                                  data-date={1667088000000}
                                >
                                  30
                                </td>
                                <td className="day" data-date={1667174400000}>
                                  31
                                </td>
                                <td
                                  className="new day"
                                  data-date={1667260800000}
                                >
                                  1
                                </td>
                                <td
                                  className="new day"
                                  data-date={1667347200000}
                                >
                                  2
                                </td>
                                <td
                                  className="new day"
                                  data-date={1667433600000}
                                >
                                  3
                                </td>
                                <td
                                  className="new day"
                                  data-date={1667520000000}
                                >
                                  4
                                </td>
                                <td
                                  className="new day"
                                  data-date={1667606400000}
                                >
                                  5
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="today"
                                  style={{ display: "none" }}
                                >
                                  Today
                                </th>
                              </tr>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="clear"
                                  style={{ display: "none" }}
                                >
                                  Clear
                                </th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <div
                          className="datepicker-months"
                          style={{ display: "none" }}
                        >
                          <table className="table-condensed">
                            <thead>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="datepicker-title"
                                  style={{ display: "none" }}
                                />
                              </tr>
                              <tr>
                                <th className="prev">«</th>
                                <th colSpan={5} className="datepicker-switch">
                                  2022
                                </th>
                                <th className="next">»</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colSpan={7}>
                                  <span className="month">Jan</span>
                                  <span className="month">Feb</span>
                                  <span className="month">Mar</span>
                                  <span className="month">Apr</span>
                                  <span className="month">May</span>
                                  <span className="month">Jun</span>
                                  <span className="month">Jul</span>
                                  <span className="month">Aug</span>
                                  <span className="month">Sep</span>
                                  <span className="month focused">Oct</span>
                                  <span className="month">Nov</span>
                                  <span className="month">Dec</span>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="today"
                                  style={{ display: "none" }}
                                >
                                  Today
                                </th>
                              </tr>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="clear"
                                  style={{ display: "none" }}
                                >
                                  Clear
                                </th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <div
                          className="datepicker-years"
                          style={{ display: "none" }}
                        >
                          <table className="table-condensed">
                            <thead>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="datepicker-title"
                                  style={{ display: "none" }}
                                />
                              </tr>
                              <tr>
                                <th className="prev">«</th>
                                <th colSpan={5} className="datepicker-switch">
                                  2020-2029
                                </th>
                                <th className="next">»</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colSpan={7}>
                                  <span className="year old">2019</span>
                                  <span className="year">2020</span>
                                  <span className="year">2021</span>
                                  <span className="year focused">2022</span>
                                  <span className="year">2023</span>
                                  <span className="year">2024</span>
                                  <span className="year">2025</span>
                                  <span className="year">2026</span>
                                  <span className="year">2027</span>
                                  <span className="year">2028</span>
                                  <span className="year">2029</span>
                                  <span className="year new">2030</span>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="today"
                                  style={{ display: "none" }}
                                >
                                  Today
                                </th>
                              </tr>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="clear"
                                  style={{ display: "none" }}
                                >
                                  Clear
                                </th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <div
                          className="datepicker-decades"
                          style={{ display: "none" }}
                        >
                          <table className="table-condensed">
                            <thead>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="datepicker-title"
                                  style={{ display: "none" }}
                                />
                              </tr>
                              <tr>
                                <th className="prev">«</th>
                                <th colSpan={5} className="datepicker-switch">
                                  2000-2090
                                </th>
                                <th className="next">»</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colSpan={7}>
                                  <span className="decade old">1990</span>
                                  <span className="decade">2000</span>
                                  <span className="decade">2010</span>
                                  <span className="decade focused">2020</span>
                                  <span className="decade">2030</span>
                                  <span className="decade">2040</span>
                                  <span className="decade">2050</span>
                                  <span className="decade">2060</span>
                                  <span className="decade">2070</span>
                                  <span className="decade">2080</span>
                                  <span className="decade">2090</span>
                                  <span className="decade new">2100</span>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="today"
                                  style={{ display: "none" }}
                                >
                                  Today
                                </th>
                              </tr>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="clear"
                                  style={{ display: "none" }}
                                >
                                  Clear
                                </th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <div
                          className="datepicker-centuries"
                          style={{ display: "none" }}
                        >
                          <table className="table-condensed">
                            <thead>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="datepicker-title"
                                  style={{ display: "none" }}
                                />
                              </tr>
                              <tr>
                                <th className="prev">«</th>
                                <th colSpan={5} className="datepicker-switch">
                                  2000-2900
                                </th>
                                <th className="next">»</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colSpan={7}>
                                  <span className="century old">1900</span>
                                  <span className="century focused">2000</span>
                                  <span className="century">2100</span>
                                  <span className="century">2200</span>
                                  <span className="century">2300</span>
                                  <span className="century">2400</span>
                                  <span className="century">2500</span>
                                  <span className="century">2600</span>
                                  <span className="century">2700</span>
                                  <span className="century">2800</span>
                                  <span className="century">2900</span>
                                  <span className="century new">3000</span>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="today"
                                  style={{ display: "none" }}
                                >
                                  Today
                                </th>
                              </tr>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="clear"
                                  style={{ display: "none" }}
                                >
                                  Clear
                                </th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* </div> */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-md-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center mb-3 mb-md-0">
                        <button className="btn btn-social-icon btn-facebook btn-rounded">
                          <i className="fab fa-facebook-f" />
                        </button>
                        <div className="ml-4">
                          <h5 className="mb-0">Facebook</h5>
                          <p className="mb-0">813 friends</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3 mb-md-0">
                        <button className="btn btn-social-icon btn-twitter btn-rounded">
                          <i className="fab fa-twitter" />
                        </button>
                        <div className="ml-4">
                          <h5 className="mb-0">Twitter</h5>
                          <p className="mb-0">9000 followers</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3 mb-md-0">
                        <button className="btn btn-social-icon btn-google btn-rounded">
                          <i className="fab fa-google-plus-g" />
                        </button>
                        <div className="ml-4">
                          <h5 className="mb-0">Google plus</h5>
                          <p className="mb-0">780 friends</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-social-icon btn-linkedin btn-rounded">
                          <i className="fab fa-linkedin-in" />
                        </button>
                        <div className="ml-4">
                          <h5 className="mb-0">Linkedin</h5>
                          <p className="mb-0">1090 connections</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* content-wrapper ends */}
          {/* partial:partials/_footer.html */}
          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                Copyright © 2018. All rights reserved.
              </span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                Hand-crafted &amp; made with{" "}
                <i className="far fa-heart text-danger" />
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
