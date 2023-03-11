import React from "react";
import { Link, useNavigate } from "react-router-dom";
import avtar from "./image/avtar.png";

export default function Header() {
  let userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container-fluid nav-bar bg-transparent postion-fixed">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <a
            href="index.html"
            className="navbar-brand d-flex align-items-center text-center"
          >
            <div className="icon p-2 me-2">
              <img
                className="img-fluid"
                src="assest/img/icon-deal.png"
                alt="Icon"
                style={{ width: 30, height: 30 }}
              />
            </div>
            <h1 className="m-0 text-primary">Makaan</h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto align-items-center">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Property
                </Link>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link to="/propertytype" className="dropdown-item">
                    Property List
                  </Link>
                  <Link to="/about" className="dropdown-item">
                    Property Type
                  </Link>
                </div>
              </div>

              {/* <Link to ="/propertylist" className="nav-item nav-link">
        propertylist
        </Link> */}
              <Link to="/propertytype" className="nav-item nav-link">
                propertytype
              </Link>

              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
              {!userData ? (
                <>
                  <Link to="/registration" className="nav-item nav-link">
                    Registeration
                  </Link>
                  <Link to="/login" className="nav-item nav-link">
                    Log in
                  </Link>
                </>
              ) : (
                ""
              )}
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle active"
                  data-bs-toggle="dropdown"
                >
                  {userData && (
                    <div className="me-3 dropdown">
                      <img src={avtar} height={50} width={50} />
                    </div>
                  )}
                </a>
                <div class="dropdown-menu rounded-0 m-0">
                  <a class="dropdown-item" onClick={() => navigate("/profile")}>
                    My Profile
                  </a>
                  <a class="dropdown-item" onClick={() => navigate("/editprofile")}>
                    Edit Profile
                  </a>
                  <a class="dropdown-item" onClick={() => navigate("/rechangepassword")}>
                    Change Password
                  </a>
                  {userData?.role === "640a11bf7387cfb8e11df200" ? (
                   
                    <a
                    class="dropdown-item"
                    onClick={() => navigate("/propertyform")}
                  >
                    Add Product
                  </a>
                  ) : (
                    <a
                    class="dropdown-item"
                    onClick={() => navigate("/vendor")}
                  >
                    Vendor
                  </a>
                  )}
                  <a
                    class="dropdown-item"
                    onClick={() => {
                      localStorage.clear();
                      navigate("/login");
                    }}
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
            <a
              href=""
              className="btn btn-primary px-3n add-property-btn d-none d-lg-flex"
            >
              Add Property
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
