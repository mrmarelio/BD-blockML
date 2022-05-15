import React from "react";
import BdLogo from "assets/icons/bdLogoMain.svg";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/" data-testid="logo-link">
      <div className="header__icon__main-logo">
        <img src={BdLogo} alt="Main logo of the website" />
      </div>
    </Link>
  );
};

export default NavLogo;
