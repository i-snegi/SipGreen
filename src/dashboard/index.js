import React from 'react';
import { useAuth } from '../auth/AuthProvider';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import './index.css';

function Dashboard() {
    let auth = useAuth();
    let navigate = useNavigate();

    return <>
        <div className='container-fluid'>
            <div className='row justify-content-md-center dashboard-header'>
                <div className='col-12'>
                    <header>
                        <nav className="navbar">
                            <div className="container-fluid">
                                <Link className='db-nav-brand' href="/"><i className="fa-solid fa-leaf"></i>&nbsp; SIPGreen</Link>
                                <p>
                                    <h6 style={{ display: 'inline' }}>Welcome {auth.user?.toUpperCase()}!</h6>{" "}&nbsp;&nbsp;&nbsp;
                                    <button className='btn btn-danger logout-btn'
                                        onClick={() => {
                                            auth.signout(() => navigate("/"));
                                        }}
                                    >
                                        Sign out&nbsp;&nbsp;<i className="fa-solid fa-right-from-bracket"></i>
                                    </button>
                                </p>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>
            <div className='row dashboard-sidebar-container'>
                <div className='col-2 dashboard-sidebar'>
                    <ul id="sideBar">
                        <li>
                            <NavLink to="portfolio" className='link-tiles'><i className="fa fa-brands fa-buffer"></i> Investment Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="green-bonds" className='link-tiles'><i className="fa-solid fa-ticket"></i> Green Bonds</NavLink>
                        </li>
                        <li>
                            <NavLink to="certificates" className='link-tiles'><i className="fa-solid fa-certificate"></i> Certificates</NavLink>
                        </li>
                        <li>
                            <NavLink to="rewards" className='link-tiles'><i className="fa-solid fa-coins"></i> Rewards</NavLink>
                        </li>
                        <li>
                            <NavLink to="offers" className='link-tiles'><i className="fa fa-solid fa-award"></i> Offers</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='col-10 dashboard-content-area'>

                    <div className='row'>
                        <div className='col-12'>
                            <Outlet />
                        </div>
                    </div>
                </div>
                <div className="branded-footer">
                    <p>Powered by <a href='https://www.natwest.com/' rel='noreferrer' target='_blank'>
                        <img src="https://www.natwest.com/content/dam/natwest_com/navigation/header/natwest-logo.png" height={"18px"} alt="natwest logo" /></a>.</p>
                </div>
            </div>
        </div>
    </>;
}

export default Dashboard;