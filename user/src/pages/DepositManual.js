import axios from "axios";
import { useState } from "react";
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { link } from "../constants/Link";
import Loader from "../components/Loader";
import { useEffect } from "react";
import { Alert } from "react-bootstrap";

const DepositManual = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const [dataa, setDataa] = useState([]);

  const [depositData, setDepositData] = useState({
    paymentImage: "",
    amount: JSON.parse(localStorage.getItem("payment-amout")),
    date: "",
    id: user ? JSON.parse(user).user._id : "",
  });

  console.log(depositData.id);
  const handleSubmit = async () => {
    const response = await axios.post(`${link}/deposit`, depositData);
    try {
      console.log(response);

      if (response.data) {
        console.log("boooom");
        setMessage("Successfully Submited");
      }
    } catch (error) {
      console.log(error.message);
      setError("Unable To Upload File...");
    }
  };

  useEffect(async () => {
    setloading(true);
    try {
      const response = await axios.get(`${link}/getaccount`);

      console.log(response.data);
      setDataa(response.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      setloading(false);
    }
  }, []);

  if (loading == true) {
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
                <h2 className="page-title text-white">Deposit Confirm</h2>
              </div>
            </div>
          </div>
        </section>
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
              <ul className="navbar-nav text-center"></ul>
            </div>
          </div>
        </nav>
        <section
          className="pt-100 pb-100 bg_img"
          style={{
            backgroundImage:
              'url(" https://smartsavecontribution.com/assets/templates/basic/images/elements/bg1.jpg ")',
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card border--base">
                  <div className="card-body p-lg-4">
                    <div>
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="FeC7ZX8cEhv1DgrwNf0EgvK2hg7YU2rYcIrRvrHc"
                      />{" "}
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <h3 className="text-center mt-2">
                            You have requested{" "}
                            <b className="text--success">${depositData.amount && depositData.amount} USD</b> , Please
                            pay <b className="text--success">${depositData.amount && depositData.amount} USD </b> with
                            charge{" "}
                          </h3>
                          <h4 className="text-center my-4">
                            Please follow the instruction bellow
                          </h4>
                          <p className="my-4 text-center" />
                          <div align="center">make deposit to this account</div>
                          <div align="center">
                            <b>
                              <font size={4}>
                                {dataa.details[0].accountName}
                              </font>
                            </b>
                          </div>
                          <div align="center">
                            <b>
                              <font size={4}>
                                {dataa.details[0].nameOfAccount}
                              </font>
                            </b>
                          </div>
                          <div align="center">
                            <b>
                              <font size={4}>
                                {dataa.details[0].accountnumber}
                              </font>
                            </b>
                          </div>
                          <div align="center">
                            <br />
                          </div>
                          <div align="center">
                            after payment click on deposit on your dashboard and
                            upload the screenshot for admin approval before it
                            will be reflected on your account
                            <br />
                          </div>
                          <p />
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Proof of Payment </strong>
                            </label>
                            <br />
                            <div
                              className="fileinput fileinput-new w-100"
                              data-provides="fileinput"
                            >
                              <div
                                className="fileinput-new thumbnail withdraw-thumbnail"
                                data-trigger="fileinput"
                                style={{ display: "none" }}
                              >
                                <img
                                  src="https://smartsavecontribution.com/assets/images/default.png"
                                  alt="Image"
                                />
                              </div>
                              <div className="fileinput-preview fileinput-exists thumbnail wh-200-150" />
                              <div className="img-input-div">
                                <span className="btn-file">
                                  <span className="fileinput-new ">
                                    {" "}
                                    Select Screenshot{" "}
                                  </span>
                                  <span className="btn btn-sm px-4 btn--base fileinput-exists">
                                    {" "}
                                    Change
                                  </span>
                                  <FileBase64
                                    multiple={false}
                                    onDone={({ base64 }) => {
                                      setDepositData((val) => ({
                                        ...val,
                                        paymentImage: base64,
                                      }));
                                    }}
                                  />
                                </span>
                                <a
                                  href="#"
                                  className="btn btn-sm px-4 btn--danger fileinput-exists"
                                  data-dismiss="fileinput"
                                >
                                  {" "}
                                  Remove
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Date </strong>
                            </label>
                            <input
                              type="date"
                              className="form--control"
                              name="date"
                              placeholder="date"
                              onChange={(e) =>
                                setDepositData((val) => ({
                                  ...val,
                                  date: e.target.value,
                                }))
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <button
                              type="submit"
                              class="btn btn-secondary w-100"
                              disabled={
                                depositData.screenshot == "" &&
                                depositData.date == ""
                                  ? "true"
                                  : ""
                              }
                              onClick={handleSubmit}
                            >
                              Pay Now
                            </button>
                            <p className="mt-2 text-center">
                              {depositData.screenshot == "" ||
                              depositData.date == ""
                                ? "Please Both Fields Are Required"
                                : ""}
                            </p>
                            <p>{message && message}</p>
                            {error && (
                              <Alert variants="info">{error && error}</Alert>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default DepositManual;
