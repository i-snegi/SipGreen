import React from 'react';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import AuthProvider, { RequireAuth } from './auth/AuthProvider';
import LoginPage from './auth/LoginPage';
import Dashboard from './dashboard';
import Homepage from './Homepage';
import Rewards from './dashboard/rewards/rewards';
import Certificates from './dashboard/certificates/certificates';
import GreenBonds from './dashboard/green-bonds/green-bonds';
import Offers from './dashboard/offers/offers';
import Portfolio from './dashboard/portfolio/portfolio';


function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          {/* <h1>Welcome to our app</h1> */}
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              >
                <Route path="/dashboard/rewards" element={<Rewards />} />
                <Route path="/dashboard/certificates" element={<Certificates />} />
                <Route path="/dashboard/green-bonds" element={<GreenBonds />} />
                <Route path="/dashboard/offers" element={<Offers />} />
                <Route path="/dashboard/portfolio" element={<Portfolio />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
