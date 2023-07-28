import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useLocation();

  if (!user) {
    return <Navigate to="/Login" state={{ from: history.location }} />;
  }
  // if (user.user.emailVerifycation == false) {
  //   return <Navigate to="/authorization" state={{ from: history.location }} />;
  // }
  return children;
};

export default PrivateRoute;
