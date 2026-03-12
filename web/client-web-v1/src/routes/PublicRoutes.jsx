import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "../public_app/layout/PublicLayout";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}></Route>
    </Routes>
  );
}

export default PublicRoutes;
