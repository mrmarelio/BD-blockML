import React from "react";
import PropTypes from "prop-types";
import "./blockspacebuttons.scss";

const BlockSpaceButtons = ({ itemName, onClick }) => {
  return (
    <button className="blockSpaceButton__item" type="button" onClick={onClick}>
      {itemName}
    </button>
  );
};

BlockSpaceButtons.propTypes = {
  itemName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

BlockSpaceButtons.defaultProps = {
  onClick: () => {},
};

export default BlockSpaceButtons;
