import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { baseUrl } from '../BaseUrl/BaseUrl'

export default function Changepassword() {
    const navigate = useNavigate()
    const [newData,setNewData] = useState({
        password:"",
        confirmPassword:""
    })

    const handleChange = (e) =>{
        let {name,value} = e.target
        setNewData({...newData,[name]:value})
    }

    const handleSubmit = async() =>{
        if(newData?.password === newData?.confirmPassword){

            let  body ={
                email : localStorage.getItem("email"),
            password: newData?.password,
            
            }
            await axios.post(baseUrl +"users/verify-password",body).then((res)=>{
              console.log("res",res)
              toast.success(res?.data?.message)
    
              localStorage.setItem("email",newData)
              navigate("/login")
            }).catch((err)=>{
              console.log("err",err)
            })
        }else{
            toast.error("password and confirm password are not match")
        }
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
  }}
>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                Change password
              </h2>
              <form>
                
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="new password"
                    value={newData?.password}
                    onChange={(e)=> handleChange(e)}
                    
                  />
                  
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control form-control-lg"
                    placeholder=" confirm password"
                    value={newData?.confirmPassword}
                    onChange={(e)=> handleChange(e)}
                  />
                  
                </div>
                
                
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
