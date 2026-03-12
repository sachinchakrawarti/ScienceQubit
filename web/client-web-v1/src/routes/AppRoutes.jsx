import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import DashboardRoutes from "./DashboardRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Dashboard Routes */}
      <Route path="/dashboard/*" element={<DashboardRoutes />} />

      {/* Public Routes */}
      <Route path="/*" element={<PublicRoutes />} />
    </Routes>
  );
}
