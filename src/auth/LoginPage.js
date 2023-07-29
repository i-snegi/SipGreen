import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import './login-page.css';

function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || "/dashboard/portfolio";

    function handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username");

        auth.signin(username, () => {
            // Send them back to the page they tried to visit when they were
            // redirected to the login page. Use { replace: true } so we don't create
            // another entry in the history stack for the login page.  This means that
            // when they get to the protected page and click the back button, they
            // won't end up back on the login page, which is also really nice for the
            // user experience.
            navigate(from, { replace: true });
        });
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row login-box'>
                    <div className='col-8 left-box'>
                        <h1 className='brand-logo'><i className="fa-solid fa-leaf"></i> SIPGreen</h1>
                        <h6 className="cover-heading">GO GREEN</h6>
                        <h6>Invest in future</h6>
                        <h6>Join us towards a sustainable future.</h6>
                        <p className='i-text'>Login from here to access.</p>

                    </div>
                    <div className='col-4 right-box'>
                        <div className="login-form">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-12">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" name="username" className="form-control" id="username" />
                                </div>
                                <div className="mb-12">
                                    <label htmlFor="secret" className="form-label">Password</label>
                                    <input type="password" name="password" className="form-control" id="secret" />
                                </div>
                                <div className="mb-12 form-check" style={{marginTop: '1rem'}}>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-primary login-button">Login&nbsp;&nbsp;<i className="fa-solid fa-right-to-bracket"></i></button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className="sidenav">
                <div className="login-main-text">
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                </div>
            </div>
        </>
    );
}

export default LoginPage;