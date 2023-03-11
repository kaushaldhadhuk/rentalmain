import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { baseUrl } from '../BaseUrl/BaseUrl'

export default function Forgetpassword() {
    const navigate = useNavigate()
    const [newData,setNewData] = useState()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        let  body ={
        email: newData,
        
        }
        await axios.post(baseUrl +"users/forgot-password",body).then((res)=>{
          console.log("res",res)
          toast.success(res?.data?.message)

          localStorage.setItem("email",newData)
          navigate("/otppassword")
        }).catch((err)=>{
          console.log("err",err)
        })
      }

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
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
                Forget password
              </h2>
              <form>
                
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="email"
                    onChange={(e) => setNewData(e.target.value)}                   
                  />
                  
                </div>

                
                
                
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary mb-5"
                    onClick={handleSubmit}
                  >
                     Get Otp
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
