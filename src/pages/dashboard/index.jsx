// src/pages/dashboard/index.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import PermitList from "./PermitList";
import ChatbotLogs from "./ChatbotLogs";
import PrivateRoute from "../../components/PrivateRoute";
import DashboardOverview from "./DashboardOverview";
import EditContent from "./EditContent"; // new
import AdminRoute from "../../components/AdminRoute"; // new

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

        {/* NEW: edit content page (admin only) */}
        <Route
          path="edit-content"
          element={
            <AdminRoute>
              <EditContent />
            </AdminRoute>
          }
        />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}
