// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useStore from "../hooks/useStore";

/**
 * PrivateRoute wrapper for react-router v6.
 * If userLoggedIn is false -> redirect to /login.
 * Keeps requested path in state for potential redirect after login.
 */
export default function PrivateRoute({ children }) {
  const userLoggedIn = useStore((s) => s.userLoggedIn);
  const location = useLocation();

  if (!userLoggedIn) {
    // send user to login and preserve current path
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
}
