import React from "react";
import Script from "./script";
import { Link } from 'react-router-dom'

export default function Footer() {
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div
  className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
  data-wow-delay="0.1s"
>
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-3 col-md-6">
        <h5 className="text-white mb-4">Get In Touch</h5>
        <p className="mb-2">
          <i className="fa fa-map-marker-alt me-3" />
          123 Street, New York, USA
        </p>
        <p className="mb-2">
          <i className="fa fa-phone-alt me-3" />
          +012 345 67890
        </p>
        <p className="mb-2">
          <i className="fa fa-envelope me-3" />
          info@example.com
        </p>
        <div className="d-flex pt-2">
          <a className="btn btn-outline-light btn-social" href="https://twitter.com/SavaniJetal?t=ezrCzVzYWAjSwqnD7Vey5Q&s=09">
            <i className="fab fa-twitter" />
          </a>
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="btn btn-outline-light btn-social" href="https://instagram.com/kaushal_dhaduk?igshid=NTE5MzUyOTU=">
            <i className="fab fa-instagram"/>
          </a>
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <h5 className="text-white mb-4">Quick Links</h5>
        <Link className="btn btn-link text-white-50" to="/about">
          About Us
        </Link>
        <Link className="btn btn-link text-white-50" to="/contact">
          Contact Us
        </Link>
        <a className="btn btn-link text-white-50" href="">
          Our Services
        </a>
        <a className="btn btn-link text-white-50" href="">
          Privacy Policy
        </a>
        <a className="btn btn-link text-white-50" href="">
          Terms &amp; Condition
        </a>
      </div>
      <div className="col-lg-3 col-md-6">
        <h5 className="text-white mb-4">Photo Gallery</h5>
        <div className="row g-2 pt-2">
          <div className="col-4">
            <img
              className="img-fluid rounded bg-light p-1"
              src="assest/img/property-1.jpg"
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid rounded bg-light p-1"
              src="assest/img/property-2.jpg"
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid rounded bg-light p-1"
              src="assest/img/property-3.jpg"
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid rounded bg-light p-1"
              src="assest/img/property-4.jpg"
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid rounded bg-light p-1"
              src="assest/img/property-5.jpg"
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid rounded bg-light p-1"
              src="assest/img/property-6.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      
    </div>
  </div>
      
</div>

<Script/>
    </div>
  )
}
