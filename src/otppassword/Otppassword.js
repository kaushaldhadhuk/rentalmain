import React from 'react'
// import { useNavigate } from 'react-router-dom';
import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from 'react';
import { baseUrl } from '../BaseUrl/BaseUrl';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Otppassword() {
    const navigate = useNavigate()
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    const [otp, setOtp] = useState("");
    const handleReSubmit = async(e) =>{
        e.preventDefault()
        let  body ={
        email: localStorage.getItem("email"),       
        }
        await axios.post(baseUrl +"users/forgot-password",body).then((res)=>{
          console.log("res",res)
          toast.success(res?.data?.message)
        //   navigate("/changepassword")
        }).catch((err)=>{
          console.log("err",err)
        })
      }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        let  body ={
        email: localStorage.getItem("email"),
        otp:Number(otp)      
        }
        await axios.post(baseUrl +"users/verify-otp",body).then((res)=>{
          console.log("res",res)
          toast.success(res?.data?.message)
          navigate("/changepassword")
        }).catch((err)=>{
          console.log("err",err)
        })
      }
    
    return (
        <div>
            <section 
            className="vh-100 bg-image"
            style={{
              backgroundImage:
                'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
            }}>
           <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                otp password
              </h2>
              <form>
                
              <OTPInput value={otp} onChange={setOtp} autoFocus OTPLength={6} otpType="number" disabled={false} secure />
                                <ResendOTP onResendClick={() => handleReSubmit()} />
 
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary mb-5"
                    onClick={handleSubmit}
                  >
                    submit
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
  
        </div>
    );
}
