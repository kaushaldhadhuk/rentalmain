import React from 'react'

export default function Changepassword() {
    
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
                                Change Password
                            </h3>

                            <div className="login-or">

                            </div>
                            <form>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="icofont-lock" />
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="New Password"/> 
                                 </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="icofont-lock" />
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary"> Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
