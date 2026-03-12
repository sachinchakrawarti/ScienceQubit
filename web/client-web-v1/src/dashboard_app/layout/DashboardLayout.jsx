import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../layout/navbar/Navabar";

function DashboardLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default DashboardLayout;
