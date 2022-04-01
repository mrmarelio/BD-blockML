import React from "react";
import { ReactComponent as MainLogo } from "assets/icons/bdLogo.svg";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__wrapper__logo">
          <MainLogo />
        </div>
        <div className="header__wrapper__navigation">Main</div>
        <div className="header__wrapper__contacts">Contacts</div>
      </div>
    </header>
  );
};

export default Header;
