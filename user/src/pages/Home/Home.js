import img from "../../assets/images/frontend/banner/61e0e20426fad1642127876.jpg";
import img2 from "../../assets/images/logoIcon/logo.png";
import img3 from "../../assets/templates/basic/images/elements/white-wave-1.png";
import img4 from "../../assets/images/frontend/about/61e0df8bf121e1642127243.jpg";
import img5 from "../../assets/templates/basic/images/elements/white-wave-2.png";
import img6 from "../../assets/templates/basic/images/elements/white-wave-1.png";
import img7 from "../../assets/images/logoIcon/logo.png";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div className="preloader">
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
                    <Link className to="/services">
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
      <div className="main-wrapper">
        {/* hero section start */}
        <section
          className="hero bg_img"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div className="hero__wave-shape">
            <img
              src={require("../../assets/templates/basic/images/elements/white-wave-1.png")}
              alt="wave image"
            />
          </div>
          <div className="hero__wave-shape two">
            <img src={img3} alt="wave image" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9 text-center">
                <h2
                  className="hero__title text-white wow fadeInUp"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.3s"
                >
                  Welcome to Smart Save Contribution
                </h2>
                <p
                  className="text-white mt-4 wow fadeInUp"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.3s"
                >
                  Best Secure Platform to Earn Save And Flex
                </p>
                <Button
                  variant="secondary"
                  href="register.html"
                  className="btn custom--bg text-white mt-4 wow fadeInUp"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.3s"
                >
                  Create an Account
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* hero section end */}
        <div className="feature-section pb-100">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-xl-3 col-sm-6 wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <div className="feature-card rounded-3">
                  <div className="icon">
                    <i className="fas fa-file-invoice-dollar" />{" "}
                  </div>
                  <h3 className="title">Online Payment</h3>
                  <p>
                    We have online payment services like PayPal, Stripe,
                    Paystack, Skrill, Flutterwave, Mollie, Payeer, RazorPay,
                    etc.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-sm-6 wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <div className="feature-card rounded-3">
                  <div className="icon">
                    <i className="fas fa-coins" />{" "}
                  </div>
                  <h3 className="title">Take Loan</h3>
                  <p>
                    We have several plans to apply for a loan. You may apply to
                    our loan plans by submitting some of your valid information.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-sm-6 wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <div className="feature-card rounded-3">
                  <div className="icon">
                    <i className="fas fa-wallet" />{" "}
                  </div>
                  <h3 className="title">Deposit Schemes</h3>
                  <p>
                    We have two deposit schemes for you, one is Deposit Pension
                    Scheme and another one is the Fixed Deposit Receipt.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-sm-6 wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <div className="feature-card rounded-3">
                  <div className="icon">
                    <i className="fas fa-exchange-alt" />{" "}
                  </div>
                  <h3 className="title">Transfer Money</h3>
                  <p>
                    You are able to transfer your funds within the Viserbank or
                    other banks we support by adding your beneficiaries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about section start */}
        <section id="about" className="pt-100 pb-50 section--bg">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-6">
                <div className="about-thumb rounded-3">
                  <img src={img4} alt="image" />
                  <a
                    href="https://www.youtube.com/embed/aFYlAzQHnY4"
                    data-rel="lightcase:myCollection"
                    className="video-icon wow fadeInRight"
                    data-wow-duration="0.5s"
                    data-wow-delay="0.3s"
                  >
                    <i className="las la-play" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 ps-lg-5">
                <div className="section-header">
                  <div className="section-top-title border-left custom--cl">
                    About Us
                  </div>
                  <h2 className="section-title">
                    We care about your money and safety.
                  </h2>
                </div>
                <div className="row gy-4"></div>
              </div>
            </div>
          </div>
        </section>
        {/* about section end */}
        {/* service section start */}
        <section
          id="services"
          className="service-section position-relative z-index-2 pt-50 pb-100"
        >
          <div className="top-wave">
            <img src={img5} alt="wave image" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-7 col-xl-8 col-lg-10">
                <div className="section-header text-center">
                  <div className="section-top-title border-left custom--cl">
                    Our Services
                  </div>
                  <h2 className="section-title">
                    We make your life comfortable with our services.
                  </h2>
                </div>
              </div>
            </div>
            {/* row end */}
            <div className="row justify-content-center gy-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <div className="service-card rounded-3">
                  <div className="service-card__icon rounded-2 custom--cl">
                    <i className="las la-exchange-alt" />{" "}
                  </div>
                  <div className="service-card__content">
                    <h3 className="title">Fast Transfer</h3>
                    <p className="mt-2">
                      Our Money transfer system is secure and easy. Send your
                      funds to your beneficiaries within SSC or to other banks.
                      Transfer within SSC is instant and to other banks may take
                      24 hours.
                    </p>
                  </div>
                </div>
                {/* service-card end */}
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <div className="service-card rounded-3">
                  <div className="service-card__icon rounded-2 custom--cl">
                    <i className="fas fa-credit-card" />{" "}
                  </div>
                  <div className="service-card__content">
                    <h3 className="title">Deposit Funds</h3>
                    <p className="mt-2">
                      Account-holders of SSC are able to deposit their money
                      through our several payment systems. We have online
                      payment services like PayPal, Stripe, Paystack, Skrill,
                      Flutterwave, Mollie, Payeer, etc.
                    </p>
                  </div>
                </div>
                {/* service-card end */}
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <div className="service-card rounded-3">
                  <div className="service-card__icon rounded-2 custom--cl">
                    <i className="fas fa-money-check-alt" />{" "}
                  </div>
                  <div className="service-card__content">
                    <h3 className="title">Withdraw Funds</h3>
                    <p className="mt-2">
                      Account-holders of Viserbank are able to withdraw money
                      from their account. Without verification, any withdrawal
                      won't be completed, so you can trust Viserbank.
                    </p>
                  </div>
                </div>
                {/* service-card end */}
              </div>
            </div>
          </div>
        </section>
        {/* service section end */}
        {/* why choose us section start */}
        <section
          className="pt-100 pb-50 bg_img dark--overlay-two"
          style={{
            backgroundImage:
              'url("assets/images/frontend/why_choose/60d497b25b98a1624545202.jpg")',
          }}
        >
          <div className="bottom-wave d-lg-block d-none">
            <img src={img6} alt="wave image" />
          </div>
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-3 text-xl-start text-center">
                <div className="section-header">
                  <div className="section-top-title border-left custom--cl">
                    Why Choose Us?
                  </div>
                  <h2 className="section-title text-white">
                    We are giving you the best services
                  </h2>
                  <a
                    href="register.html"
                    className="btn mt-4 custom--bg text-white"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="row gy-4">
                  <div
                    className="col-md-6 wow fadeInUp"
                    data-wow-duration="0.5s"
                    data-wow-delay="0.3s"
                  >
                    <div className="choose-card rounded-3">
                      <div className="choose-card__icon">
                        <i className="las la-user-shield" />{" "}
                      </div>
                      <div className="choose-card__content">
                        <h3 className="title">Secure Service</h3>
                        <p>
                          Every balance subtracting transactions need OTP
                          verification so You can feel safe about your funds.
                          Also, you can use the google authenticator app on your
                          cellphone and enable 2FA security from the account
                          menu.
                        </p>
                      </div>
                    </div>
                    {/* choose-card end */}
                  </div>
                  <div
                    className="col-md-6 wow fadeInUp"
                    data-wow-duration="0.5s"
                    data-wow-delay="0.3s"
                  >
                    <div className="choose-card rounded-3">
                      <div className="choose-card__icon">
                        <i className="fas fa-file-invoice-dollar" />{" "}
                      </div>
                      <div className="choose-card__content">
                        <h3 className="title">Lowest Transaction Fee</h3>
                        <p>
                          Our transaction fee is much low comparing to other
                          banks. You can deposit, transfer, and withdraw your
                          funds with the lowest transaction charge. As our
                          transfer system is secure and robust you can trust us.
                        </p>
                      </div>
                    </div>
                    {/* choose-card end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* why choose us section end */}
        {/* how work section start */}
        <section id="how-work" className="pt-50 pb-50 section--bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-header text-center">
                  <div className="section-top-title border-left custom--cl">
                    How it works
                  </div>
                  <h2 className="section-title">It's easy to join with Us</h2>
                </div>
              </div>
            </div>
            {/* row end */}
            <div className="row gy-4">
              <div
                className="col-lg-3 col-sm-6 how-work-item wow fadeInLeft"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <div className="how-work-card">
                  <div className="how-work-card__step">1</div>
                  <h3 className="title mt-4">Open an Account</h3>
                  <p className="mt-2">
                    To be an account holder you have to open an account first.
                  </p>
                </div>
                {/* how-work-card end */}
              </div>
              <div
                className="col-lg-3 col-sm-6 how-work-item wow fadeInLeft"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <div className="how-work-card">
                  <div className="how-work-card__step">2</div>
                  <h3 className="title mt-4">Verification</h3>
                  <p className="mt-2">
                    After registration you need to verify your Email and Mobile
                    Number.
                  </p>
                </div>
                {/* how-work-card end */}
              </div>
              <div
                className="col-lg-3 col-sm-6 how-work-item wow fadeInLeft"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <div className="how-work-card">
                  <div className="how-work-card__step">3</div>
                  <h3 className="title mt-4">Deposit</h3>
                  <p className="mt-2">
                    Deposit some funds before applying on any FDR or DPS plans.
                  </p>
                </div>
                {/* how-work-card end */}
              </div>
              <div
                className="col-lg-3 col-sm-6 how-work-item wow fadeInLeft"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <div className="how-work-card">
                  <div className="how-work-card__step">4</div>
                  <h3 className="title mt-4">Get Service</h3>
                  <p className="mt-2">
                    Now you can get any of our services as our registered
                    account-holder
                  </p>
                </div>
                {/* how-work-card end */}
              </div>
            </div>
          </div>
        </section>
        {/* how work section end */}
        {/* overview section start */}
        <section className="overview-section pt-100 pb-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="section-header text-center">
                  <h2 className="section-title text-white">
                    We provide our banking services all over the world
                  </h2>
                  <p className="mt-3 text-white">
                    Smart Save Contribution is a saving platform own by private
                    individual. in this platform you earn while saving for
                    various reason. it encourages you to save and reach your
                    goals. founded in 2018 and it has help so many individual
                    reach their saving goals
                  </p>
                </div>
              </div>
            </div>
            {/* row end */}
            <div
              className="overview-area wow fadeInUp"
              data-wow-duration="0.5s"
              data-wow-delay="0.3s"
            >
              <div className="row gy-4 justify-content-center"></div>
            </div>
            {/* overview-area end */}
          </div>
        </section>
        {/* overview section end */}
        <section id="faq" className="pt-100 pb-100 section--bg">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-xxl-5 col-lg-7 wow fadeInLeft"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <div className="section-header text-center">
                  <h2 className="section-title">Frequently Asked Questions</h2>
                  <p className="mt-2">
                    Though we have provided lots of information about us and how
                    we serve what is our working process our terms and
                    conditions our policies etc.
                  </p>
                </div>
              </div>
            </div>
            {/* row end */}
            <div className="accordion custom--accordion" id="faqAccordion">
              <div className="row gy-4 justify-content-center">
                <div
                  className="col-lg-6 wow fadeInRight"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.3s"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="h-71">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c-71"
                        aria-expanded="false"
                        aria-controls="c-71"
                      >
                        Is opening an account is free?
                      </button>
                    </h2>
                    <div
                      id="c-71"
                      className="accordion-collapse collapse"
                      aria-labelledby="h-71"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, we don't take any fees for opening an account.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* accordion-item*/}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="h-72">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c-72"
                        aria-expanded="false"
                        aria-controls="c-72"
                      >
                        Is it possible to send money from Viserbank to another
                        bank?
                      </button>
                    </h2>
                    <div
                      id="c-72"
                      className="accordion-collapse collapse"
                      aria-labelledby="h-72"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, you can send money from Viserbank to another
                          bank?
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* accordion-item*/}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="h-88">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c-88"
                        aria-expanded="false"
                        aria-controls="c-88"
                      >
                        How to open an account?
                      </button>
                    </h2>
                    <div
                      id="c-88"
                      className="accordion-collapse collapse"
                      aria-labelledby="h-88"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Get the registration form by clicking on the Sing Up
                          button on the top bar. Provide all information and
                          click on the Sign Up button.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* accordion-item*/}
                </div>
                <div
                  className="col-lg-6 wow fadeInRight"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.3s"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="h-89">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c-89"
                        aria-expanded="false"
                        aria-controls="c-89"
                      >
                        Does Viserbank share our information for advertisement?
                      </button>
                    </h2>
                    <div
                      id="c-89"
                      className="accordion-collapse collapse"
                      aria-labelledby="h-89"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          No, we don't provide our account holder's information
                          to any third-party organization.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* accordion-item*/}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="h-115">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c-115"
                        aria-expanded="false"
                        aria-controls="c-115"
                      >
                        How to take a loan?
                      </button>
                    </h2>
                    <div
                      id="c-115"
                      className="accordion-collapse collapse"
                      aria-labelledby="h-115"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          We have several loan plans. Choose the best plan
                          suitable for you and just click on the Apply Now
                          button and put the amount.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* accordion-item*/}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="h-116">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c-116"
                        aria-expanded="false"
                        aria-controls="c-116"
                      >
                        How to open an FDR?
                      </button>
                    </h2>
                    <div
                      id="c-116"
                      className="accordion-collapse collapse"
                      aria-labelledby="h-116"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          We have several FDR plans. Choose the best plan
                          suitable for you and just click on the Apply Now
                          button and put the amount.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* accordion-item*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-50 pb-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="section-header">
                  <h2 className="section-title">Our Partners</h2>
                </div>
              </div>
            </div>
            <div
              className="row wow fadeInUp"
              data-wow-duration="0.5s"
              data-wow-delay="0.3s"
            >
              <div className="col-lg-12">
                <div className="brand-slider"></div>
              </div>
            </div>
            {/* row end */}
          </div>
        </section>
        {/* subsacribe section start */}
        <section className="subscribe-section">
          <div className="container">
            <div className="row gy-3 justify-content-between align-items-center">
              <div
                className="col-xxl-5 col-xl-6 col-lg-4 text-lg-start text-center wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <h4 className="text-white">
                  Subscribe our newsletter and stay connected
                </h4>
              </div>
              <div
                className="col-xxl-7 col-xl-6 col-lg-8 wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <form className="subscribe-form" id="subscribeForm">
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="Taxgg6jWoxVhKqCuXELkbsaa010CgmUOr9KuzIvb"
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
            href="page/84-privacy-policy.html"
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
      <link rel="stylesheet" href="assets/global/css/iziToast.min.css" />
      {/* Mirrored from smartsavecontribution.com/ by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 29 Oct 2022 13:52:25 GMT */}
    </div>
  );
};

export default Home;
