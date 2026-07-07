import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // If not logged in, redirect to the login page
    return <Navigate to="/admin/login" replace />;
  }

  // If logged in, render the protected component
  return children;
};

export default ProtectedRoute;
