import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";



export default function Contact() {
  
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject : "",
    message : "",
  })
  function onchangeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function isValid() {
    let email_pattern =
      /^[A-Za-z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    // let password_pattern =
    //   /^(?=.[A-Z])(?=.[1@#$&])(?=.[0-9])(?=.*[a-z]).{8}$/;
    //  let number_pattern = /^\d{10}$/;

    if (formData.name === "") {
      toast.error("please enter name !", { position: "top-center" });
    }
    
    //email
    else if (email_pattern.test(formData.email) === false) {
      toast.error("please enter valid email", { position: "top-center" });
    }
    //Mobile Number
    // else if (
    //   formData.mobile === "" ||
    //   number_pattern.test(formData.mobile) === false
    // ) {
    //   toast.error("mobile number must have 10 digit.", {
    //     position: "top-center",
    //   });
    // }
    //password
    // else if (
    //   formData.password !== "" &&
    //   password_pattern.test(formData.password) === false
    // ) {
    //   alert("please enter strong password !");
    // }

    // else if (
    //   formData.password === "" ||
    //   formData.cnfpassword === "" ||
    //   formData.password !== formData.cnfpassword
    // ) {
    //   toast.error("password not matched !", { position: "top-center" });
    // } else {
    const configOptions = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      "http://localhost:8000/contact",
      configOptions
    );
    const result = await response.json();
    if ((result.status = 1)) {
      toast.success("Register Successfully !");
      // navigate("/login");
    }
  }

  
  return (
    <div>
      <>

      <>
      <>
  {/* Header Start */}
  <div className="container-fluid header bg-white p-0">
    <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
      <div className="col-md-6 p-5 mt-lg-5">
        <h1 className="display-5 animated fadeIn mb-4">Contact Us</h1>
        <nav aria-label="breadcrumb animated fadeIn">
          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li
              className="breadcrumb-item text-body active"
              aria-current="page"
            >
              Contact
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-md-6 animated fadeIn">
        <img className="img-fluid" src="assest/img/header.jpg" alt="" />
      </div>
    </div>
  </div>
</>

  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <h1 className="mb-3">Contact Us</h1>
        <p>
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
          dolor duo.
        </p>
      </div>
      <div className="row g-4">
        <div className="col-12">
          <div className="row gy-4">
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-light rounded p-3">
                <div
                  className="d-flex align-items-center bg-white rounded p-3"
                  style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                >
                  <div className="icon me-3" style={{ width: 45, height: 45 }}>
                    <i className="fa fa-map-marker-alt text-primary" />
                  </div>
                  <span>123 Street, New York, USA</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="bg-light rounded p-3">
                <div
                  className="d-flex align-items-center bg-white rounded p-3"
                  style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                >
                  <div className="icon me-3" style={{ width: 45, height: 45 }}>
                    <i className="fa fa-envelope-open text-primary" />
                  </div>
                  <span>info@example.com</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-light rounded p-3">
                <div
                  className="d-flex align-items-center bg-white rounded p-3"
                  style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                >
                  <div className="icon me-3" style={{ width: 45, height: 45 }}>
                    <i className="fa fa-phone-alt text-primary" />
                  </div>
                  <span>+012 345 6789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <iframe
            className="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            frameBorder={0}
            style={{ minHeight: 400, border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
        <div className="col-md-6">
          <div className="wow fadeInUp" data-wow-delay="0.5s">
            <p className="mb-4">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax &amp; PHP in a few minutes. Just
              copy and paste the files, add a little code and you're done.{" "}
              <a href="https://htmlcodex.com/contact-form">Download Now</a>.
            </p>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                    name="name"
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      onChange={(e) => onchangeHandler(e)}
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                    name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      onChange={(e) => onchangeHandler(e)}
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                    name="subject"
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      onChange={(e) => onchangeHandler(e)}
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                    name="message"
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 150 }}
                      defaultValue={""}
                      onChange={(e) => onchangeHandler(e)}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" 
                  onClick={(e) => isValid(e)}
                  
                  type="button">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
</>

</>

    </div>
  )
}
