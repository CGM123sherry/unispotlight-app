import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FilterPage from "./Pages/FilterPage";
import ContactPage from "./Pages/ContactPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/filter" element={<FilterPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
export default AppRoutes;
