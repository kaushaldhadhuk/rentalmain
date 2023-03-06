import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function Registation() {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  function updateVal(e) {
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
      "http://localhost:8000/insert-user",
      configOptions
    );
    const result = await response.json();
    if ((result.status = 1)) {
      toast.success("Register Successfully !");
      navigate("/login");
    }
  }

  return (
    <>
      
      <div className="m-5 p-5 shadow">
        <h1>REGISTRATION</h1>
        <form>
          <div className="form-row col-md-5">
            <div className="form-group col-md-6">
              <input
                type="name"
                name="name"
                className="form-control "
                id="inputEmail4"
                placeholder="username"
                onChange={(e) => updateVal(e)}
              /><br/>
            </div>

            <div className="form-group col-md-6">
              <input
                type="email"
                name="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                onChange={(e) => updateVal(e)}
              /><br/>
            </div>
            <div className="form-group col-md-6">
              <input
                type="password"
                name="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
                onChange={(e) => updateVal(e)}
              /><br/>
            </div>
          </div>
          <div className="form-group col-md-6">
            <input
              type="number"
              name="mobile"
              className="form-control"
              id="inputAddress"
              placeholder="Mobile no."
              onChange={(e) => updateVal(e)}
            /><br/>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => isValid(e)}
          >
            Sign in
          </button>
        </form>
        
      </div>
    </>

  );
}
