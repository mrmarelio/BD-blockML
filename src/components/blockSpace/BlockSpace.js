import React from "react";
import PropTypes from "prop-types";
import Blockly from "blockly";
import { BlocklyWorkspace } from "react-blockly";
import "./ThemeMain";
import "./BlockGenerator";
import "./blockspace.scss";

const BlockSpace = ({ categories, xml, workspaceChange, xmlChange }) => {
  return (
    <BlocklyWorkspace
      toolboxConfiguration={categories}
      initialXml={xml}
      className="blockly-space"
      workspaceConfiguration={{
        grid: {
          spacing: 20,
          length: 3,
          colour: "#ccc",
          snap: true,
        },
        theme: Blockly.Themes.Halloween,
      }}
      onWorkspaceChange={workspaceChange}
      onXmlChange={xmlChange}
    />
  );
};

BlockSpace.propTypes = {
  categories: PropTypes.object.isRequired,
  xml: PropTypes.string,
  workspaceChange: PropTypes.func.isRequired,
  xmlChange: PropTypes.string,
};

export default BlockSpace;
