import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "../public_app/layout/PublicLayout";
import HomePage from "../public_app/features/home/HomePage";
import Mathematics from "../public_app/features/mathematics/Mathematics";
import Sexology from "../public_app/features/sexology/Sexology";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="mathematics" element={<Mathematics />} />
        <Route path="/sexology" element={<Sexology />} />
      </Route>
    </Routes>
  );
}

export default PublicRoutes;
