import { useEffect } from "react";
import { useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { link } from "../constants/Link";
import axios from "axios";
import { Link } from "react-router-dom";
import FileBase from "react-file-base64";
import { Alert } from "react-bootstrap";
import Footer from "../components/Footer";
import ProfileSettingsTabs from "../components/ProfileSettingsTabs";

const More = () => {
  const id = JSON.parse(localStorage.getItem("user")).user._id;
  const [user, setUser] = useState([]);
  const [message, setmessage] = useState("");
  const [loading, setloading] = useState(true);
  const [formData, setFormData] = useState({
    id: id,
    img: "",
    name: "",
  });

  console.log(formData);
  console.log(id);

  const handleUpdate = async () => {
    try {
      setloading(true);
      const response = await axios.patch(`${link()}/update-user`, formData);

      if (response.data) {
        console.log(response.data);
        setmessage(response.data.message);
        setloading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(async () => {
    if (id) {
      try {
        setloading(true);
        const user = await axios.get(`${link()}/getuser/${id}`);

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
                <h2 className="page-title text-white">Profile</h2>
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
            <div className="register">
              <div className="row justify-content-center gy-4">
                <div className="col-xl-4 col-lg-5">
                  <div className="card">
                    <div className="card-body">
                      <div className="avatar-upload">
                        <div className="avatar-edit">
                          <input
                            type="file"
                            name="image"
                            id="imageUpload"
                            accept=".png, .jpg, .jpeg"
                          />
                          <label htmlFor="imageUpload" />
                        </div>
                        <div className="avatar-preview">
                          <div
                            id="imagePreview"
                            style={{
                              backgroundImage: `url(${user.user.img})`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <ul className="caption-list-two">
                        <li>
                          <span className="caption">Name</span>
                          <span className="value">{user.user.name}</span>
                        </li>
                        <li>
                          <span className="caption">E-mail Address</span>
                          <span className="value">{user.user.email}</span>
                        </li>
                        <li>
                          <span className="caption">Mobile Number</span>
                          <span className="value">{user.user.phone}</span>
                        </li>
                        <li>
                          <span className="caption">Country</span>
                          <span className="value">{user.user.country}</span>
                        </li>
                        <li>
                          <span className="caption">City</span>
                          <span className="value">{user.user.city}</span>
                        </li>
                        <li>
                          <span className="caption">Zip Code</span>
                          <span className="value">{user.user.zip}</span>
                        </li>
                        <li>
                          <span className="caption">Address</span>
                          <span className="value">{user.user.address}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                  <div className="card">
                    <div className="card-body p-4">
                      <div className="row">
                        <div className="form-group col-12">
                          <label
                            htmlFor="InputFirstname"
                            className="col-form-label"
                          >
                            First Name:
                          </label>
                          <input
                            type="text"
                            className="form--control"
                            id="InputFirstname"
                            name="firstname"
                            placeholder="First Name"
                            defaultValue={user.user.name}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="form-group col-12">
                          <label htmlFor="lastname" className="col-form-label">
                            Profile Picture
                          </label>
                          <FileBase
                            multiple={false}
                            onDone={({ base64 }) => {
                              setFormData((prev) => ({ ...prev, img: base64 }));
                            }}
                          />
                        </div>
                        <div className="form-group ">
                          <button
                            disabled={
                              (formData.img || formData.name) == ""
                                ? "true"
                                : ""
                            }
                            className="btn btn--base w-100"
                            onClick={handleUpdate}
                          >
                            Update Profile
                          </button>
                          {message && (
                            <Alert variant="success" className="mt-3">
                              {message}
                            </Alert>
                          )}
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

export default More;
