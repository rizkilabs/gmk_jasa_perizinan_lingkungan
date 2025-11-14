// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  // Check login from localStorage
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  // If no user, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, show children
  return children;
}
