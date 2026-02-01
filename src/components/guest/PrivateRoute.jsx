import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token =
    localStorage.getItem("access_token") || sessionStorage.getItem("access_token");

  console.log("PrivateRoute - Token found:", token); 
  console.log("localStorage access_token:", localStorage.getItem("access_token")); 
  console.log("sessionStorage access_token:", sessionStorage.getItem("access_token")); 

  if (!token) {
    console.log("No token found, redirecting to login");
    return <Navigate to="/login" replace />;
  }

  console.log("Token exists, allowing access"); 
  return children;
};

export default PrivateRoute;