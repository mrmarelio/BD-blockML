import React, { useCallback, useState } from "react";
import Blockly from "blockly";
import BlockSpace from "components/blockSpace";
import WorkspaceConfig from "components/blockSpace/WorkspaceConfig";
import "./sandbox.scss";

const Sandbox = () => {
  const [javascriptCode, setJavascriptCode] = useState("");

  const onWorkspaceChange = useCallback((workspace) => {
    let code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById("blockly-code-preview").innerText = code;
    document.getElementById("blockly-iframe-website").src =
      "data:text/html;charset=utf-8," + encodeURIComponent(code);
    setJavascriptCode(code);

    //Check to see if the function is running for the first time
    if (typeof onWorkspaceChange.firstTime == "undefined") {
      //First time run
      let xmlText = localStorage.getItem("blockly-html-code");
      //Check if there is a non empty local storage item
      xmlText = xmlText || (xmlText = WorkspaceConfig.InitialXmlConfig);
      let xmlDom = Blockly.Xml.textToDom(xmlText);
      Blockly.Xml.domToWorkspace(xmlDom, workspace);

      onWorkspaceChange.firstTime = false;
    } else {
      //Non first time
      let xmlDom = Blockly.Xml.workspaceToDom(workspace);
      let xmlText = Blockly.Xml.domToText(xmlDom);
      localStorage.setItem("blockly-html-code", xmlText);
    }
  }, []);

  return (
    <div className="sandbox">
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
