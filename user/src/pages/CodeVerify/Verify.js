import img from "../../assets/images/logoIcon/logo.png";
import img2 from "../../assets/images/frontend/signup_bg/61e0e062c87c21642127458.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { link } from "../../constants/Link";

const Verify = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  console.log(code);
  const VerifyCode = async () => {
    const { user } = JSON.parse(localStorage.getItem("user"));

    try {
      const response = await axios.post(`${link}/verify-code`, {
        code,
        id: user._id,
      });

      console.log(response);

      if (response.data) {
        navigate("/user/dashboard");
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }

    console.log("sss");
  };
  return (
    <div>
      {/* Hello world */}

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .country-code .input-group-prepend .input-group-text{\n        background: #fff !important;\n    }\n    .country-code select{\n        border: none;\n    }\n    .country-code select:focus{\n        border: none;\n        outline: none;\n    }\n",
        }}
      />
      <div className="preloader">
        <div className="dl">
          <div className="dl__container">
            <div className="dl__corner--top" />
            <div className="dl__corner--bottom" />
          </div>
          <div className="dl__square" />
        </div>
      </div>
      <div className="main-wrapper">
        <section
          className="account-section registration-section bg_img"
          style={{
            backgroundImage: `url(${img2})`,
          }}
        >
          <div className="account-section-left">
            <div className="account-section-left-inner">
              <h4 className="title text-white mb-2">
                Create an Account to SmartsaveContribution
              </h4>
              <p className="text-white">
                Please provide your valid information to register! Use a Valid
                email account to recieve transaction Alert
              </p>
              <p className="mt-xl-5 mt-3 text-white">
                Have an account?{" "}
                <Link to="login" className="text--base">
                  Login here
                </Link>
              </p>
            </div>
          </div>
          <div className="account-section-right">
            <div className="top text-center">
              <a href="index.html" className="account-logo"></a>
            </div>
            <div className="middle">
              <div className="account-form">
                <div className="row">
                  {/* <input
                    type="hidden"
                    name="_token"
                    defaultValue="rOBjMAxdCR01yJoUltm8BYpyBopYz7V5nNJBmHqQ"
                  /> */}
                  <div className="col-lg-6 form-group">
                    <img src={img} alt="logo" />
                    <label htmlFor="firstname">
                      Please Enter Verification Code On Your Email
                    </label>
                    <input
                      id="firstname"
                      placeholder="Verification Code"
                      type="text"
                      className="form--control"
                      name="code"
                      onChange={(e) => setCode(e.target.value)}
                      //   defaultValue
                      required
                    />
                    <button
                      onClick={VerifyCode}
                      //   type="submit"
                      className="btn btn--base text-white w-100"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="row">
                <div className="col-xl-12">
                  <ul className="d-flex flex-wrap align-items-center account-short-link justify-content-center">
                    <li>
                      <a href="page/111-company-policy.html" target="blank">
                        Company Policy
                      </a>
                      ,
                    </li>
                    <li>
                      <a href="page/85-terms-of-services.html" target="blank">
                        Terms of Services
                      </a>
                      ,
                    </li>
                    <li>
                      <a href="page/84-privacy-policy.html" target="blank">
                        Privacy Policy
                      </a>
                      .
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* jQuery library */}
      {/* bootstrap js */}
      {/* scroll animation */}
      {/* main js */}
      <link rel="stylesheet" href="assets/global/css/iziToast.min.css" />
      {/* Mirrored from smartsavecontribution.com/register by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 29 Oct 2022 21:08:04 GMT */}
    </div>
  );
};

export default Verify;
