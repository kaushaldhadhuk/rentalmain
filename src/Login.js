import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./BaseUrl/BaseUrl";
import { toast } from "react-toastify";
// import { Link } from 'react-router-dom'

export default function Login() {
  let navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dataOfUser = {
    email,
    password,
  };
  console.log(dataOfUser, "userData");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const submitData = async () => {
    const response = axios.post(
      `http://localhost:8000/login `,
      dataOfUser
    );
  };
  const updateVal = () => {};
  const isValid = () => {};

  const handleSubmit = async(e) =>{
    e.preventDefault()
    let  body ={
    email: email,
    password: password,
    }
    await axios.post(baseUrl +"users/login",body).then((res)=>{
      console.log("res",res)
      toast.success(res?.data?.message)
      localStorage.setItem("token",res?.data?.token)
      localStorage.setItem("userData", JSON.stringify(res?.data?.user))
      navigate("/")
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
                login 
              </h2>
              <form>
                
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    id="inputEmail4"
                    className="form-control form-control-lg"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    id="inputPassword4"
                    className="form-control form-control-lg"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  
                </div>
                
                
                <div className="d-flex justify-content-center">
                  <button
                    // type="submit"
                    className="btn btn-primary mb-5"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Login
                  </button>
                  <div onClick={()=> navigate("/forgetpassword")}>Forget Password</div>
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
