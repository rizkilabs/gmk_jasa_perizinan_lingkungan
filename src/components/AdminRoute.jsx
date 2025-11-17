// src/components/AdminRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useStore from "../hooks/useStore";

/**
 * AdminRoute
 * Wrap children, allow only if user exists and role === "admin".
 * Otherwise redirect to /dashboard (or /login if not logged in).
 */
export default function AdminRoute({ children }) {
  const user = useStore((s) => s.user);
  const loggedIn = useStore((s) => s.userLoggedIn);

  // not logged in -> go to login
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  // logged in but not admin -> redirect to dashboard overview
  if (!user || user.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  // allowed
  return <>{children}</>;
}
