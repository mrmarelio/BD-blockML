import React from "react";
import PropTypes from "prop-types";
import Blockly from "blockly";
import { BlocklyWorkspace } from "react-blockly";
import "./ThemeMain";
import "./BlockGenerator";
import "./blockspace.scss";

const BlockSpace = ({ categories, initialXml, workspaceChange, xmlChange }) => {
  return (
    <BlocklyWorkspace
      toolboxConfiguration={categories}
      initialXml={initialXml}
      className="blockly-space"
      workspaceConfiguration={{
        grid: {
          spacing: 20,
          length: 3,
          colour: "#ccc",
          snap: true,
        },
        theme: Blockly.Themes.Main,
      }}
      onWorkspaceChange={workspaceChange}
      onXmlChange={xmlChange}
    />
  );
};

BlockSpace.propTypes = {
  categories: PropTypes.object.isRequired,
  initialXml: PropTypes.any,
  workspaceChange: PropTypes.func.isRequired,
  xmlChange: PropTypes.any,
};

export default BlockSpace;
