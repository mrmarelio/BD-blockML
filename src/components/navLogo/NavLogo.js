import React from "react";
import BdLogo from "assets/icons/bdLogo.svg";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/pagrindinis">
      <div className="header__icon__main-logo">
        <img src={BdLogo} alt="Main logo of the website" />
      </div>
    </Link>
  );
};

export default NavLogo;
