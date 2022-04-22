import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Contacts from "pages/Contacts";
import Sandbox from "pages/Sandbox";

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/sandbox" element={<Sandbox />} />
    <Route path="/kontaktai" element={<Contacts />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);
