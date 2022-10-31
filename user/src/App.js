import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Verify from "./pages/CodeVerify/Verify";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Deposit } from "./pages/Deposit/Deposit";

import Home from "./pages/Home/Home";
import Signin from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Payment from "./pages/Payment";
import DepositManual from "./pages/DepositManual";
import More from "./pages/More";
import Withdraw from "./pages/Withdraw";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import PasswordChange from "./pages/PasswordChange";
import Transactions from "./components/Transactions";
import Referral from "./components/Referal";
import Log from "./components/Log";
import Policy1 from "./pages/Policy1";
import Policy2 from "./pages/Policy2";
import Policy3 from "./pages/Policy3";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Services from "./pages/Services";

function App() {
  const amout = localStorage.getItem("payment-amout");

  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="*" element={<Error404 />} /> */}
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Signin />
              </PublicRoute>
            }
          />
          <Route path="/authorization" element={<Verify />} />
          <Route
            path="/user/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/deposit"
            element={
              <PrivateRoute>
                <Deposit />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/payment"
            element={
              <PrivateRoute>
                <Payment />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/profile-setting"
            element={
              <PrivateRoute>
                <More />
              </PrivateRoute>
            }
          />
          <Route
            path="/withdraw/history"
            element={
              <PrivateRoute>
                <Withdraw />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/deposit/manual"
            element={
              amout ? (
                <PrivateRoute>
                  <DepositManual />
                </PrivateRoute>
              ) : (
                <Navigate to="/user/deposit" replace={true} />
              )
            }
          />

          <Route
            path="/user/change-password"
            element={
              <PrivateRoute>
                <PasswordChange />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/referral/commissions"
            element={
              <PrivateRoute>
                <Log />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/transactions"
            element={
              <PrivateRoute>
                <Transactions />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/referees"
            element={
              <PrivateRoute>
                <Referral />
              </PrivateRoute>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/111-company-policy" element={<Policy1 />} />
          <Route path="/84-privacy-policy" element={<Policy2 />} />
          <Route path="/85-terms-of-services" element={<Policy3 />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
