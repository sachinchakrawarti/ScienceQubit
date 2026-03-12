import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../dashboard_app/layout/DashboardLayout";

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}></Route>
    </Routes>
  );
}

export default DashboardRoutes;
