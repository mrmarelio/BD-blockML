import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavigationItem = ({ link, itemName, onClick }) => {
  return (
    <li className="navigation__item">
      <NavLink
        to={link}
        onClick={onClick}
        className={({ isActive }) =>
          isActive
            ? "navigation__link navigation__link-active"
            : "navigation__link"
        }
      >
        {itemName}
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

NavigationItem.defaultProps = {
  onClick: () => {},
};

export default NavigationItem;
