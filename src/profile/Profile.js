import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
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
                    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
                    {"}"}
                    .card {"{"}
                    position: relative; display: flex; flex-direction: column; min-width: 0;
                    word-wrap: break-word; background-color: #fff; background-clip: border-box;
                    border: 0 solid rgba(0,0,0,.125); border-radius: .25rem;
                    {"}"}
                    .card-body {"{"}
                    flex: 1 1 auto; min-height: 1px; padding: 1rem;
                    {"}"}
                    .gutters-sm {"{"}
                    margin-right: -8px; margin-left: -8px;
                    {"}"}
                    .gutters-sm&gt;.col, .gutters-sm&gt;[class*=col-] {"{"}
                    padding-right: 8px; padding-left: 8px;
                    {"}"}
                    .mb-3, .my-3 {"{"}
                    margin-bottom: 1rem!important;
                    {"}"}
                    .bg-gray-300 {"{"}
                    background-color: #e2e8f0;
                    {"}"}
                    .h-100 {"{"}
                    height: 100%!important;
                    {"}"}
                    .shadow-none {"{"}
                    box-shadow: none!important;
                    {"}"}
                </>

            </style>

            <div className="container">
                <div className="main-body">
                  
                    <div className="row gutters-sm" >
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body" style={{height:"523px"}}><br/><br/><br/>
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
                                            <button className="btn btn-primary">View Profile</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">Yash Kheni</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">yashkheni55@gmail.com</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">7778883067</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">City</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">Surat</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">State</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">Gujarat</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Country</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">India</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Pincode</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">3954006</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                        Panchavati raw house
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <Link
                                                className="btn btn-primary "
                                                to="/EditProfile"
                                            >
                                                Edit
                                            </Link>
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
