import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import img2 from "../assets/images/logoIcon/logo.png";

const Contact = () => {
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
      {/* header-section start  */}
      <header className="header">
        <div className="header__bottom">
          <div className="container">
            <nav className="navbar navbar-expand-lg p-0 align-items-center justify-content-between">
              <a className="site-logo site-title" href="index.html">
                <img src={img2} alt="logo" />
              </a>
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
                <ul className="navbar-nav main-menu m-auto" id="linkItem">
                  <li>
                    <Link className="active" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className to="/service">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="nav-right">
                  <Link
                    to="/login"
                    className="btn btn-sm py-2 btn-outline--gradient me-3 text-white"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="btn btn-sm py-2 custom--bg text-white"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* header__bottom end */}
      </header>
      {/* header-section end  */}
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
                <h2 className="page-title text-white">Contact Us</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-100 pb-100">
          <div className="container">
            <div className="row gy-4 justify-content-center pb-50">
              <div className="col-xl-6 col-lg-5 order-lg-1 order-2">
                <div className="map-wrapper">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15248.978521521234!2d-73.75141171038925!3d40.67880542694389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1628170138354!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 order-lg-2 order-1">
                <div className="contact-form-wrapper">
                  <h2 className="title">Feel free to contact us</h2>
                  <form action method="post">
                    <div className="row">
                      <div className="col-lg-6 form-group">
                        <input
                          type="hidden"
                          name="_token"
                          defaultValue="jKEy3v7SOUL5YfJfye3lSJZ4X7fuiO7QlnkUaWMZ"
                        />{" "}
                        <label htmlFor="name">Name *</label>
                        <div className="custom-icon-field">
                          <i className="las la-user" />
                          <input
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            className="form--control"
                            defaultValue
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 form-group">
                        <label htmlFor="email">Email *</label>
                        <div className="custom-icon-field">
                          <i className="las la-envelope" />
                          <input
                            name="email"
                            id="email"
                            type="text"
                            placeholder="Enter E-Mail Address"
                            className="form--control"
                            defaultValue
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 form-group">
                        <label htmlFor="subject">Subject *</label>
                        <div className="custom-icon-field">
                          <i className="las la-clipboard-list" />
                          <input
                            name="subject"
                            id="subject"
                            type="text"
                            placeholder="Write your subject"
                            className="form--control"
                            defaultValue
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 form-group">
                        <label>Message *</label>
                        <div className="custom-icon-field">
                          <textarea
                            name="message"
                            wrap="off"
                            placeholder="Write your message"
                            className="form--control"
                            defaultValue={""}
                          />
                          <i className="las la-comment" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="btn btn--gradient">
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* contact-form-wrapper end */}
              </div>
            </div>
            {/* row end */}
            <h3 className="fw-bold mb-4">
              Quick <br /> Information
            </h3>
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="contact-info-card gradient--bg">
                  <div className="contact-info-card__icon">
                    <i className="fas fa-map-marked" />{" "}
                  </div>
                  <div className="contact-info-card__content">
                    <h4 className="title">Office Address</h4>
                    <a href="javascript:void(0)">benin city edo state</a>
                  </div>
                </div>
                {/* contact-info-card end */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-info-card gradient--bg">
                  <div className="contact-info-card__icon">
                    <i className="fas fa-envelope" />{" "}
                  </div>
                  <div className="contact-info-card__content">
                    <h4 className="title">Email Address</h4>
                    <a href="javascript:void(0)">
                      contact@smartsavecontribution.com
                    </a>
                  </div>
                </div>
                {/* contact-info-card end */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-info-card gradient--bg">
                  <div className="contact-info-card__icon">
                    <i className="fas fa-headphones" />{" "}
                  </div>
                  <div className="contact-info-card__content">
                    <h4 className="title">Mobile Number</h4>
                    <a href="javascript:void(0)">09027670927</a>
                  </div>
                </div>
                {/* contact-info-card end */}
              </div>
            </div>
            {/* row end */}
          </div>
        </section>
        {/* hero section end */}
        {/* subsacribe section start */}
        <section className="subscribe-section">
          <div className="container">
            <div className="row gy-3 justify-content-between align-items-center">
              <div
                className="col-xxl-5 col-xl-6 col-lg-4 text-lg-start text-center wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
                style={{
                  visibility: "hidden",
                  animationDuration: "0.5s",
                  animationDelay: "0.3s",
                  animationName: "none",
                }}
              >
                <h4 className="text-white">
                  Subscribe our newsletter and stay connected
                </h4>
              </div>
              <div
                className="col-xxl-7 col-xl-6 col-lg-8 wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
                style={{
                  visibility: "hidden",
                  animationDuration: "0.5s",
                  animationDelay: "0.3s",
                  animationName: "none",
                }}
              >
                <form className="subscribe-form" id="subscribeForm">
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="jKEy3v7SOUL5YfJfye3lSJZ4X7fuiO7QlnkUaWMZ"
                  />{" "}
                  <div className="custom-icon-field">
                    <input
                      type="email"
                      name="email"
                      className="form--control"
                      placeholder="Enter email address"
                    />
                    <i className="las la-envelope" />
                  </div>
                  <button type="submit" className="btn custom--bg">
                    Subsscribe
                  </button>
                </form>
              </div>
            </div>
            {/* row end */}
          </div>
        </section>
        {/* subsacribe section end */}
      </div>
      {/* Modal */}
      <div className="cookie-modal" id="cookieModal">
        <div className="container">
          <div className="cookie-header mb-1">
            <h5 className="text--base">Cookie Policy</h5>
            <button className="close-btn">
              <i className="fas fa-times" />
            </button>
          </div>
          <p className="mb-2 d-inline">
            We may use cookies or any other tracking technologies when you visit
            our website, including any other media form, mobile website, or
            mobile application related or connected to help customize the Site
            and improve your experience.{" "}
          </p>
          <a
            className="btn btn-sm btn--success ms-3"
            href="page/84-privacy-policy"
            target="_blank"
          >
            Learn More
          </a>
          <button type="button" className="btn btn-sm btn--base cookie-accept">
            Accept
          </button>
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

export default Contact;
