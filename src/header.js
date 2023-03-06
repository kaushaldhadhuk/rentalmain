import React from "react";
import { Link } from 'react-router-dom'


export default function Header() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container-fluid nav-bar bg-transparent postion-fixed">
  <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4 overflow-hidden">
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
      <div className="navbar-nav ms-auto">
        <Link to ="/" className="nav-item nav-link active">
          Home
        </Link>
        <Link to ="/about" className="nav-item nav-link">
          About
        </Link>
        {/* <Link to ="/propertylist" className="nav-item nav-link">
        propertylist
        </Link> */}
        <Link to ="/propertytype" className="nav-item nav-link">
        propertytype
        </Link>

        <Link to ="/contact" className="nav-item nav-link">
          Contact
        </Link>
        <Link to ="/registration" className="nav-item nav-link">
          Registeration
        </Link>
        <Link to ="/login" className="nav-item nav-link">
          Log in
        </Link>

      </div>
      <a href="" className="btn btn-primary px-3 d-none d-lg-flex">
        Add Property
      </a>
    </div>
  </nav>
</div>

    </div>
  )
}
