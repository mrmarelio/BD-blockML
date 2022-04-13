import React, { useState } from "react";
import Blockly from "blockly";
import BlockSpace from "components/blockSpace";
import "./dashboard.scss";

const Dashboard = () => {
  const [javascriptCode, setJavascriptCode] = useState("");
  const setXml = "";

  const initialXml =
    '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';

  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "HTML ir CSS",
      },
      {
        kind: "sep",
      },
      {
        kind: "category",
        name: "Pagrindinis rėmas",
        colour: "#a55b80",
        contents: [
          {
            kind: "block",
            type: "html",
            inputs: {
              content: {
                block: {
                  type: "head",
                  inputs: {
                    content: {
                      block: {
                        type: "title",
                        inputs: {
                          content: {
                            block: {
                              type: "justtext",
                            },
                          },
                        },
                      },
                    },
                  },
                  next: {
                    block: {
                      type: "bodyattributes",
                    },
                  },
                },
              },
            },
          },

          {
            kind: "block",
            type: "html",
          },
          {
            kind: "block",
            type: "head",
          },
          {
            kind: "block",
            type: "bodyattributes",
          },
          {
            kind: "block",
            type: "body",
          },
          {
            kind: "block",
            type: "title",
            inputs: {
              content: {
                block: {
                  type: "justtext",
                },
              },
            },
          },
        ],
      },
      {
        kind: "category",
        name: "Teksto struktūra",
        colour: "#745ba5",
        contents: [
          {
            kind: "block",
            type: "justtext",
          },
          {
            kind: "block",
            type: "linebreak",
          },
          {
            kind: "block",
            type: "thematicbreak",
          },
          {
            kind: "block",
            type: "heading",
          },
          {
            kind: "block",
            type: "paragraph",
          },
          {
            kind: "block",
            type: "span",
          },
          {
            kind: "block",
            type: "image",
          },
          {
            kind: "block",
            type: "division",
          },
          {
            kind: "block",
            type: "linkto",
          },
          {
            kind: "block",
            type: "generaltag",
          },
        ],
      },
      {
        kind: "category",
        name: "Teksto žymėjimas",
        colour: "#5ba55b",
        contents: [
          {
            kind: "block",
            type: "emphasise",
          },
          {
            kind: "block",
            type: "strong",
          },
          {
            kind: "block",
            type: "inserted",
          },
          {
            kind: "block",
            type: "deleted",
          },
          {
            kind: "block",
            type: "super",
          },
          {
            kind: "block",
            type: "subscript",
          },
          {
            kind: "block",
            type: "code",
          },
          {
            kind: "block",
            type: "quote",
          },
          {
            kind: "block",
            type: "blockquote",
          },
          {
            kind: "block",
            type: "sampleoutput",
          },
          {
            kind: "block",
            type: "keyboardinput",
          },
          {
            kind: "block",
            type: "variable",
          },
        ],
      },
      {
        kind: "category",
        name: "Stilius",
        colour: "#5b80a5",
        contents: [
          {
            kind: "block",
            type: "style",
          },
          {
            kind: "block",
            type: "color",
          },
          {
            kind: "block",
            type: "backgroundcolor",
          },
          {
            kind: "block",
            type: "generalstyle",
          },
        ],
      },
      {
        kind: "category",
        name: "Sąrašai",
        colour: "#995ba5",
        contents: [
          {
            kind: "block",
            type: "unorderedlist",
          },
          {
            kind: "block",
            type: "orderedlist",
          },
          {
            kind: "block",
            type: "listitem",
          },
        ],
      },
      {
        kind: "category",
        name: "Lentelės",
        colour: "#a5745b",
        contents: [
          {
            kind: "block",
            type: "table",
            inputs: {
              content: {
                block: {
                  type: "tablerow",
                  inputs: {
                    content: {
                      block: {
                        type: "tableheader",
                        next: {
                          block: {
                            type: "tableheader",
                          },
                        },
                      },
                    },
                  },
                  next: {
                    block: {
                      type: "tablerow",
                      inputs: {
                        content: {
                          block: {
                            type: "tablecell",
                            next: {
                              block: {
                                type: "tablecell",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          {
            kind: "block",
            type: "table",
          },
          {
            kind: "block",
            type: "tablerow",
          },
          {
            kind: "block",
            type: "tableheader",
          },
          {
            kind: "block",
            type: "tablecell",
          },
        ],
      },
      {
        kind: "category",
        name: "Formos",
        colour: "#5b67a5",
        contents: [
          {
            kind: "block",
            type: "form",
          },
          {
            kind: "block",
            type: "inputtext",
          },
          {
            kind: "block",
            type: "input",
          },
          {
            kind: "block",
            type: "button",
          },
        ],
      },
      {
        kind: "category",
        name: "Rašmena",
        colour: "#9fa55b",
        contents: [
          {
            kind: "block",
            type: "script",
          },
          {
            kind: "block",
            type: "onclick",
          },
        ],
      },
    ],
  };

  function workspaceDidChange(workspace) {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById("blockly-code-preview").innerText = code;
    document.getElementById("iframewebsite").src =
      "data:text/html;charset=utf-8," + encodeURIComponent(code);
    setJavascriptCode(code);
  }

  return (
    <div className="dashboard">
      <div className="dashboard__blockly-space">
        <BlockSpace
          categories={toolboxCategories}
          xml={initialXml}
          workspaceChange={workspaceDidChange}
          onXmlChange={setXml}
        />
      </div>
      <div
        className="dashboard__blockly-website-title"
        id="blockly-website-title"
      >
        Svetainė be pavadinimo
      </div>
      <div className="dashboard__blockly-code-preview">
        <pre className="blockly-code-preview" id="blockly-code-preview">
          {javascriptCode}
        </pre>
      </div>
      <div className="dashboard__blockly-website">
        <iframe
          className="blockly-iframe-website"
          id="iframewebsite"
          title="Blockly website in iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
