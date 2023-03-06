import React from 'react'
// import { useNavigate } from 'react-router-dom';
import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from 'react';



export default function Otppassword() {
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    const [otp, setOtp] = useState("");

    
    return (
        <div>
            <section className="login-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="login-form">
                            <h3>
                                OTP password
                            </h3>


                            <form>

                                <OTPInput value={otp} onChange={setOtp} autoFocus OTPLength={6} otpType="number" disabled={false} secure />
                                <ResendOTP onResendClick={() => console.log("Resend clicked")} />


                                <button
                                
                                 
                                    type="button"

                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
