import React from 'react'

export default function Forgetpassword() {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div>
            <section className="login-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="login-form">
                            <h3>
                                Forget Password
                            </h3>
                            <div className="login-or"> </div>

                            <form>
                                <div className="form-group">
                                    <label htmlFor="username">
                                        <i className="icofont-ui-user" />
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Username or Email"


                                    />
                                    <div className="text-danger text-start mt-2">Email is required!</div>
                                </div>
                                
                              
                                <button
                                    type="button"

                                    className="btn btn-primary"
                                >
                                    Get OTP
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
