import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "./BaseUrl/BaseUrl";

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

  // async function isValid() {
  //   let email_pattern =
  //     /^[A-Za-z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  //   // let password_pattern =
  //   //   /^(?=.[A-Z])(?=.[1@#$&])(?=.[0-9])(?=.*[a-z]).{8}$/;
  //   //  let number_pattern = /^\d{10}$/;

  //   if (formData.name === "") {
  //     toast.error("please enter name !", { position: "top-center" });
  //   }
    
  //   //email
  //   else if (email_pattern.test(formData.email) === false) {
  //     toast.error("please enter valid email", { position: "top-center" });
  //   }
  //   //Mobile Number
  //   // else if (
  //   //   formData.mobile === "" ||
  //   //   number_pattern.test(formData.mobile) === false
  //   // ) {
  //   //   toast.error("mobile number must have 10 digit.", {
  //   //     position: "top-center",
  //   //   });
  //   // }
  //   //password
  //   // else if (
  //   //   formData.password !== "" &&
  //   //   password_pattern.test(formData.password) === false
  //   // ) {
  //   //   alert("please enter strong password !");
  //   // }

  //   // else if (
  //   //   formData.password === "" ||
  //   //   formData.cnfpassword === "" ||
  //   //   formData.password !== formData.cnfpassword
  //   // ) {
  //   //   toast.error("password not matched !", { position: "top-center" });
  //   // } else {
  //   const configOptions = {
  //     method: "POST",
  //     body: JSON.stringify(formData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const response = await fetch(
  //     "http://localhost:8000/insert-user",
  //     configOptions
  //   );
  //   const result = await response.json();
  //   if ((result.status = 1)) {
  //     toast.success("Register Successfully !");
  //     navigate("/login");
  //   }
  // }

  const handleSubmit = async() =>{
    let  body ={
      name: formData?.name,
    email: formData?.email,
    phone: formData?.mobile,
    password: formData?.password,
    }
    await axios.post(baseUrl +"users/create-user",body).then((res)=>{
      console.log("res",res)
      toast.success(res?.data?.message)
      navigate("/login")
    }).catch((err)=>{
      console.log("err",err)
    })
  }

  return (
    <>
      
      <section
  className="vh-100 bg-image"
  style={{
    backgroundImage:
      'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
  }}
>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>
              <form>
                <div className="form-outline mb-4">
               
                  <input
                    type="text"
                    name="name"
                    id="inputname"
                    className="form-control form-control-lg"
                    placeholder="name"
                    onChange={(e) => updateVal(e)}
                  />
                  
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    id="inputEmail4"
                    className="form-control form-control-lg"
                    placeholder="email"
                    onChange={(e) => updateVal(e)}
                  />
                  
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="number"
                    name="moblie"
                    id="inputMoblie4"
                    className="form-control form-control-lg"
                    placeholder="moblie no"
                    onChange={(e) => updateVal(e)}
                  />
                  
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    id="inputPassword4"
                    className="form-control form-control-lg"
                    placeholder="password"
                    onChange={(e) => updateVal(e)}
                  />
                  
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="inputPassword4"
                    className="form-control form-control-lg"
                    placeholder="confirmpassword"
                    onChange={(e) => updateVal(e)}
                  />
                 
                </div>
                
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary mb-5"
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 
    </>

  );
}
