import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const PageAnimation = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

PageAnimation.propTypes = {
  children: PropTypes.any,
};

export default PageAnimation;
