import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "../public_app/layout/PublicLayout";
import HomePage from "../public_app/features/home/HomePage";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default PublicRoutes;
