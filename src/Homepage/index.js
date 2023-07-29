import React from 'react';
import './index.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

function Homepage() {
    let auth = useAuth();
    let navigate = useNavigate();

    const login = () => {
        console.log(`loggin in!!!`);
    }

    const displayUserState = () => {
        if (auth.user) {
            return (
                <>
                    Welcome {auth.user}!{" "}
                    <button className='btn btn-danger'
                        onClick={() => {
                            auth.signout(() => navigate("/"));
                        }}
                    >
                        Sign out
                    </button>
                </>
            )
        } else {
            return (
                <Link type="button" to="/login" className="btn btn-dark login-button" onClick={login}>Login&nbsp;&nbsp;<i className="fa-solid fa-right-to-bracket"></i></Link>
            )
        }
    }

    return (
        <div className='container-fluid'>
            <div className='row justify-content-md-center'>
                <div className='col-10'>
                    <header>
                        <nav className="navbar">
                            <div className="container-fluid">
                                <Link className='navbar-brand' href="/"><i className="fa-solid fa-leaf"></i> SIPGreen</Link>
                                {displayUserState()}
                            </div>
                        </nav>
                    </header>
                </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='col-10'>
                    <main role="main" className='main-content'>
                        <h1 className="cover-heading">GO GREEN<br />Invest in future<br />Join us towards a sustainable future.</h1>
                        <p className="lead">Cover <i className="fa-solid fa-shield-halved"></i> is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                        <div className='row card-container'>
                            <div className="col-lg-2">
                                <div className='text-center'>
                                    <img alt="logo" src="../images/investment-logo.png" width="140" height="140" />
                                    <h5 style={{ marginTop: '1rem' }}>Investment Portfolio</h5>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className='text-center'>
                                    <img alt="logo" src="../images/bonds-logo.png" width="140" height="140" />
                                    <h5 style={{ marginTop: '1rem' }}>Green Bonds</h5>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className='text-center'>
                                    <img alt="logo" src="../images/certificate-logo.png" width="140" height="140" />
                                    <h5 style={{ marginTop: '1rem' }}>Certificates</h5>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className='text-center'>
                                    <img alt="logo" src="../images/rewards-logo.png" width="140" height="140" />
                                    <h5 style={{ marginTop: '1rem' }}>Rewards</h5>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className='text-center'>
                                    <img alt="logo" src="../images/offers-logo.png" width="140" height="140" />
                                    <h5 style={{ marginTop: '1rem' }}>Offers</h5>
                                </div>
                            </div>
                        </div>
                    </main>

                </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='col-10'>
                    <footer className="mastfoot mt-auto">
                        <div className="inner">
                            <p>Powered by <a href='https://www.natwest.com/' rel='noreferrer' target='_blank'>
                                <img src="https://www.natwest.com/content/dam/natwest_com/navigation/header/natwest-logo.png" height={"18px"} alt="natwest logo" /></a>.</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Homepage;