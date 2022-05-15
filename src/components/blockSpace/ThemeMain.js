import Blockly from "blockly";

Blockly.Themes.Main = Blockly.Theme.defineTheme("mainTheme", {
  base: Blockly.Themes.Classic,
  componentStyles: {
    workspaceBackgroundColour: "#e9ecef",
    toolboxBackgroundColour: "#526d80",
    toolboxForegroundColour: "#fff",
    flyoutBackgroundColour: "#7c98ac",
    flyoutForegroundColour: "#ccc",
    flyoutOpacity: 0.7,
    scrollbarColour: "#797979",
    insertionMarkerColour: "#fff",
    insertionMarkerOpacity: 0.3,
    scrollbarOpacity: 0.4,
    cursorColour: "#d0d0d0",
  },
});
