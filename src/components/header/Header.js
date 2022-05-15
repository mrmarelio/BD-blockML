import React from "react";
import Navigation from "components/navigation";
import NavLogo from "components/navLogo/NavLogo";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__icon">
        <NavLogo />
      </div>
      <div className="header__navigation">
        <Navigation />
      </div>
      <div className="header__empty"></div>
    </header>
  );
};

export default Header;
