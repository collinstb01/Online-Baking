import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  const history = useLocation();

  if (user) {
    return <Navigate to="/user/dashboard" state={{ from: history.location }} />;
  }
  return children;
};

export default PublicRoute;
