// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "../hooks/useStore";

/**
 * PrivateRoute protects routes.
 * Props:
 * - children: React element
 * - allowedRoles: optional array of roles (e.g. ["admin"]) to further restrict
 *
 * Uses Zustand store for auth state (frontend-only).
 */
export default function PrivateRoute({ children, allowedRoles = null }) {
  const userLoggedIn = useStore((s) => s.userLoggedIn);
  const user = useStore((s) => s.user);

  // Not logged in -> send to login
  if (!userLoggedIn || !user) {
    return <Navigate to="/login" replace />;
  }

  // If allowedRoles provided, ensure user.role is one of them
  if (Array.isArray(allowedRoles) && allowedRoles.length > 0) {
    if (!allowedRoles.includes(user.role)) {
      // If logged in but not allowed, redirect to dashboard (or home)
      return <Navigate to="/dashboard" replace />;
    }
  }

  return children;
}
