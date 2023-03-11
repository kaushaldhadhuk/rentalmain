import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { baseUrl } from '../BaseUrl/BaseUrl'

export default function EditProfile() {
    const userData = JSON.parse(localStorage.getItem("userData"))
    const navigate = useNavigate()
    const [newData,setNewData] = useState({
        name:userData?.name,
        email:userData?.email,
        phone:userData?.phone,
        city:userData?.city,
        state:userData?.state,
        country:userData?.country,
        pincode:userData?.pincode,
        address:userData?.address,
    })

    const handleChange = (e) =>{
        let {name,value} = e.target
        setNewData({...newData,[name]:value})
    }

    const handleSubmit = async() =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
          }
          let body = {
            name:newData?.name,
        phone:newData?.phone,
        city:newData?.city,
        state:newData?.state,
        country:newData?.country,
        pincode:newData?.pincode,
        address:newData?.address,
          }
            
            await axios.put(baseUrl +"users/update-user",body,config).then((res)=>{
              console.log("res",res)
              toast.success(res?.data?.message)
    
              localStorage.setItem("userData",JSON.stringify(res?.data?.user))
              navigate("/profile")
            }).catch((err)=>{
              console.log("err",err)
            })
        
      }
    return (
        <div>
            <style>
                <>
                body{"{"}
                    margin-top:20px; color: #1a202c; text-align: left; background-color: #e2e8f0;
                    {"}"}
                    .main-body {"{"}
                    padding: 15px;
                    {"}"}
                    .card {"{"}
                    position: relative; display: flex; flex-direction: column; min-width: 0;
                    word-wrap: break-word; background-color: #fff; background-clip: border-box;
                    border: 0 solid transparent; border-radius: .25rem; margin-bottom: 1.5rem;
                    box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 /
                    54%);
                    {"}"}
                    .me-2 {"{"}
                    margin-right: .5rem!important;
                    {"}"}
                </>

            </style>

            <div className="container">
                <div className="main-body">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body" style={{height:"567px"}}><br/><br/><br/><br/>
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img
                                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                            alt="Admin"
                                            className="rounded-circle"
                                            width={150}
                                        />
                                        <div className="mt-3">
                                            <h4>Yash Kheni</h4>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                           <br/>
                                            <button className="btn btn-primary">Edit Profile</button>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='name'
                                                value={newData?.name}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='email'
                                                value={newData?.email}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='phone'
                                                value={newData?.phone}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">City</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='city'
                                                value={newData?.city}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">State</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='state'
                                                value={newData?.state}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Country</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='country'
                                                value={newData?.country}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Pincode</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='pincode'
                                                value={newData?.pincode}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='address'
                                                value={newData?.address}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3" />
                                        <div className="col-sm-9 text-secondary">
                                        <button className="btn btn-primary" onClick={handleSubmit}>Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
