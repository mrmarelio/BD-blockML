import React from "react";
import { motion } from "framer-motion";
import "./notfound.scss";

const NotFound = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="contacts">
      <div className="contacts__center">
        <h2 className="h2-font-style">Nerastas puslapis</h2>
      </div>
    </div>
  </motion.div>
);

export default NotFound;
