// src/pages/dashboard/index.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import PermitList from "./PermitList";
import ChatbotLogs from "./ChatbotLogs";
import PrivateRoute from "../../components/PrivateRoute";
import DashboardOverview from "./DashboardOverview";

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        {/* default dashboard page */}
        <Route index element={<DashboardOverview />} />

        <Route path="permit" element={<PermitList />} />
        <Route path="chatbot" element={<ChatbotLogs />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}
