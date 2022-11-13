import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer position-relative z-index-2">
      <div className="footer-bottom-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity={1}
            d="M0,256L48,266.7C96,277,192,299,288,282.7C384,267,480,213,576,165.3C672,117,768,75,864,96C960,117,1056,203,1152,213.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-sm-6 order-lg-1 order-1">
            <div className="footer-widget">
              <h3 className="footer-widget__title">About Us</h3>
              <p>
                Smart Save is a saving platform own by private individual. in
                this platform you earn while saving for various reason. it
                encourages you to save and reach your goals. founded in 2016 and
                it has help so many individual reach their saving goals
              </p>
              <ul className="social-media-links d-flex align-items-center mt-3">
                <li>
                  <a href="https://bd.linkedin.com/" target="_blank">
                    <i className="fab fa-linkedin-in" />{" "}
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="fab fa-instagram" />{" "}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i className="fab fa-twitter" />{" "}
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="fab fa-facebook-f" />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 order-lg-2 order-3">
            <div className="footer-widget">
              <h3 className="footer-widget__title">Quick Links</h3>
              <ul className="short-link-list">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Register</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 order-lg-3 order-4">
            <div className="footer-widget">
              <h3 className="footer-widget__title">Page</h3>
              <ul className="short-link-list">
                <li>
                  <Link to="/111-company-policy">Company Policy</Link>
                </li>
                <li>
                  <Link to="/85-terms-of-services">Terms of Services</Link>
                </li>
                <li>
                  <Link to="/84-privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 order-lg-4 order-2">
            <div className="footer-widget">
              <h3 className="footer-widget__title">Contact Us</h3>
              <ul className="footer-info-list">
                <li>
                  <i className="fas fa-map-marked" />{" "}
                  <p> Bronx, Kings, New York</p>
                </li>
                <li>
                  <i className="fas fa-envelope" />{" "}
                  <p>smartsavers021@gmail.com</p>
                </li>
                <li>
                  <i className="fas fa-headphones" /> <p>+1 (707) 346-4639</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-3 col-sm-6 order-lg-1 order-1 text-sm-start text-center">
              <a
                href="https://smartsavecontribution.com"
                className="footer-logo"
              >
                <img
                  src="https://smartsavecontribution.com/assets/images/logoIcon/logo.png"
                  alt="logo"
                />
              </a>
            </div>
            <div className="col-lg-9 col-sm-6 order-lg-3 order-2 text-sm-end text-center">
              <p>Copyright © 2021 Viserbank All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
