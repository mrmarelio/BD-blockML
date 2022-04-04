import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Contacts from "pages/Contacts";

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/kontaktai" element={<Contacts />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);
