import axios from 'axios'
import React,{useState} from 'react'
import {  useNavigate } from 'react-router-dom'
import { baseUrl } from '../BaseUrl/BaseUrl'

export default function Rechangepassword() {
  const navigate = useNavigate()
  const userData = JSON.parse(localStorage.getItem("userData"))
    const [newData,setNewData] = useState({})
    const handleChange = (e) =>{
        let {name,value} = e.target
        setNewData({...newData,[name]:value})
    }
    const handleSubmit = async() =>{
      let body ={
        email : userData?.email,
        password : newData?.password,
        oldPassword:newData?.oldPassword
      }
      let config ={
        headers: {
          'Authorization':'Bearer ' + localStorage.getItem("token") 
        }
      }
await axios.post(baseUrl + "users/change-password",body,config).then((res)=>{
  setNewData({})
  navigate("/")
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
                    name="oldPassword"
                    className="form-control form-control-lg"
                    placeholder="old password"
                    value={newData?.oldPassword}
                    onChange={(e)=>{handleChange(e)}}
                    
                  />
                  
                </div>

                
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="new password"
                    value={newData?.password}
                    onChange={(e)=>{handleChange(e)}}
                    
                  />
                  
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="confirPassword"
                    className="form-control form-control-lg"
                    placeholder=" confirm password"
                    value={newData?.confirPassword}
                    onChange={(e)=>{handleChange(e)}}
                    
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
  )
}
