import React, { useCallback, useState } from "react";
import Blockly from "blockly";
import BlockSpace from "components/blockSpace";
import WorkspaceConfig from "components/blockSpace/WorkspaceConfig";
import BlockSpaceButtons from "components/blockSpaceButtons";
import "./sandbox.scss";

const Sandbox = () => {
  const [javascriptCode, setJavascriptCode] = useState("");

  const onWorkspaceChange = useCallback((workspace) => {
    let code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById("blockly-code-preview").innerText = code;
    document.getElementById("blockly-iframe-website").src =
      "data:text/html;charset=utf-8," + encodeURIComponent(code);
    setJavascriptCode(code);

    if (typeof onWorkspaceChange.firstTime == "undefined") {
      let xmlText = localStorage.getItem("blockly-html-code");
      xmlText = xmlText || (xmlText = WorkspaceConfig.InitialXmlConfig);
      let xmlDom = Blockly.Xml.textToDom(xmlText);
      Blockly.Xml.domToWorkspace(xmlDom, workspace);
      onWorkspaceChange.firstTime = false;
    } else {
      let xmlDom = Blockly.Xml.workspaceToDom(workspace);
      let xmlText = Blockly.Xml.domToText(xmlDom);
      localStorage.setItem("blockly-html-code", xmlText);
    }
  }, []);

  function saveTextToHtml() {
    let anchorTag = document.body.appendChild(document.createElement("a"));
    let textToSave = document.getElementById("blockly-code-preview").innerText;
    anchorTag.setAttribute("download", "jusuSvetaine");
    anchorTag.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(textToSave)
    );
    anchorTag.onclick = destroyClickedElement;
    anchorTag.click();
  }

  function destroyClickedElement(event) {
    document.body.removeChild(event.target);
  }

  function removeCurrentBlocks() {
    Blockly.mainWorkspace.clear();
    document.getElementById("blockly-website-title").innerText =
      "Svetainė be pavadinimo";
  }

  return (
    <div className="sandbox">
      <div className="sandbox__button-wrapper">
        <BlockSpaceButtons
          itemName="Išsaugoti svetainės kodą"
          onClick={saveTextToHtml}
        />
        <BlockSpaceButtons
          itemName="Ištrinti visus blokus"
          onClick={removeCurrentBlocks}
        />
        <BlockSpaceButtons itemName="Pagalba" />
      </div>
      <div className="sandbox__blockly-space">
        <BlockSpace
          categories={WorkspaceConfig.ToolboxConfig}
          initialXml={WorkspaceConfig.InitialXmlConfig}
          workspaceChange={onWorkspaceChange}
        />
      </div>
      {/*
         //aprasyt package'us projekta, reacta pati
    //2 dalis teorine technologiju veikimas
    //3dalis taikymas siu technologiju
      */}
      <div
        className="sandbox__blockly-website-title"
        id="blockly-website-title"
      >
        Svetainė be pavadinimo
      </div>
      <div className="sandbox__blockly-code-preview">
        <pre className="blockly-code-preview" id="blockly-code-preview">
          {javascriptCode}
        </pre>
      </div>
      <div className="sandbox__blockly-website">
        <iframe
          className="blockly-iframe-website"
          id="blockly-iframe-website"
          title="Blockly website in iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default Sandbox;
