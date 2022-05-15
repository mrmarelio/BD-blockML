import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./pages/Dashboard";
import Contacts from "pages/Contacts";
import Sandbox from "pages/Sandbox";
import NotFound from "pages/NotFound";

export const Routing = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/BD-blockML" element={<Dashboard />} />
        <Route path="/BD-blockML/sandbox" element={<Sandbox />} />
        <Route path="/BD-blockML/kontaktai" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
