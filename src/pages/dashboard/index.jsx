// src/pages/dashboard/index.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import PermitList from "./PermitList";
import ChatbotLogs from "./ChatbotLogs";
import PrivateRoute from "../../components/PrivateRoute";
import DashboardOverview from "./PermitList"; // temporarily reuse PermitList as overview

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
        <Route index element={<DashboardOverview />} />
        <Route path="permit" element={<PermitList />} />
        <Route path="chatbot" element={<ChatbotLogs />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}
