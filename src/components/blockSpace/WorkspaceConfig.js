const ToolboxConfig = {
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

const InitialXmlConfig =
  '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';

const PresentationXmlConfig =
  '<xml xmlns="https://developers.google.com/blockly/xml"><block type="html" id="T}ml[PHerOY]k#Yg3-uq" x="50" y="110"><statement name="content"><block type="head" id=":Iaia`%Xt/IFkq9DPG*y"><statement name="content"><block type="title" id="}Fuymw6VMwIT)2~?y,EJ"><statement name="content"><block type="justtext" id="u?za`PDkhl1N-6)4i+(L"><field name="content">Svetainės pavadinimas</field></block></statement></block></statement><next><block type="bodyattributes" id="8(CPR}ulndKk[Ta)IGSU"><value name="NAME"><block type="style" id="syz6J*!.nTJ/q3O7F=oh"><statement name="styling"><block type="generalstyle" id="]y.#v_mSp%-~9ldB!5lk"><field name="property">padding</field><field name="value">0</field><next><block type="generalstyle" id="9O2Jm8)(?YN#nbABoAW7"><field name="property">margin</field><field name="value">0</field><next><block type="generalstyle" id="@wC6d%A,Q-.D%wJrroI7"><field name="property">box-size</field><field name="value">border-box</field></block></next></block></next></block></statement></block></value><statement name="content"><block type="generaltag" id="%w+$bB:);4Wt~]DPCd,1"><field name="NAME">nav</field><value name="styling"><block type="style" id="L3s:oFpQ2(zLt61=d}%a"><statement name="styling"><block type="generalstyle" id="Lq=n3^lYlVLoLX2gL_2%"><field name="property">width</field><field name="value">100vw</field><next><block type="generalstyle" id="`]=Hin)vt4Ht9Z),6_#u"><field name="property">height</field><field name="value">80px</field><next><block type="backgroundcolor" id="V=m]Nl`N#2;1~5d-9yck"><field name="NAME">#ff0000</field><next><block type="generalstyle" id="fL9UQ2I+_@.F$cpJ:Pkn"><field name="property">align-items</field><field name="value">center</field><next><block type="generalstyle" id="gh3{q5*kS:%:$fg2GRdn"><field name="property">display</field><field name="value">flex</field><next><block type="generalstyle" id="/Ea]QffMTh2=xwzxxHy="><field name="property">justify-content</field><field name="value">space-around</field></block></next></block></next></block></next></block></next></block></next></block></statement></block></value><statement name="content"><block type="unorderedlist" id="XZk{OC3[aZCGOKVv8iEQ"><value name="styling"><block type="style" id="#vfsImF-*{C5JMftB+Ut"><statement name="styling"><block type="generalstyle" id="r5x|-B=XEq@*%Ty{f(Sr"><field name="property">margin</field><field name="value">0</field><next><block type="generalstyle" id="2q{C;]{r24%z6+5K!{/."><field name="property">list-style</field><field name="value">none</field><next><block type="generalstyle" id=":EnJ*g;`z=uK/Bqjllcn"><field name="property">display</field><field name="value">flex</field><next><block type="generalstyle" id="rvTTnrqK-TkX|`zNA+-t"><field name="property">justify-content</field><field name="value">space-around</field><next><block type="generalstyle" id="l6%GES8E6L}$rhomu#eZ"><field name="property">width</field><field name="value">100%</field></block></next></block></next></block></next></block></next></block></statement></block></value><statement name="content"><block type="listitem" id="HSzdrpxh_3|]v@eU1#v%"><statement name="content"><block type="justtext" id="%eooE#k6e`Kwc3t$tmSl"><field name="content">Pagrindinis</field></block></statement><next><block type="listitem" id="*-Kh6e,+YQ~UPl9-(|O/"><statement name="content"><block type="justtext" id="w#dNJ]@Rn9}fPf3pmE+u"><field name="content">Kurti svetainę</field></block></statement><next><block type="listitem" id="ZU%K8?Yn0a%f#4Of#Jh0"><statement name="content"><block type="justtext" id="{6qB~v[{WfD!~=.Y!si/"><field name="content">Kontaktai</field></block></statement></block></next></block></next></block></statement></block></statement><next><block type="heading" id="5x=]FfjN.$r[=}kjze($"><field name="headinglevel">h2</field><value name="styling"><block type="style" id="TaEb]z_f@[C9HV!cueit"><statement name="styling"><block type="generalstyle" id="@?9:!Y9G1#J3+l;jHzU_"><field name="property">margin</field><field name="value">0</field></block></statement></block></value><statement name="content"><block type="justtext" id="#5^Q@R98.Vv:zb5N8]qU"><field name="content">Pagrindinis</field></block></statement></block></next></block></statement><next><block type="script" id="?GgEfgKG~glcx;5zauy}"></block></next></block></next></block></statement></block></xml>';

const WorkspaceConfig = {
  ToolboxConfig,
  InitialXmlConfig,
  PresentationXmlConfig,
};

export default WorkspaceConfig;
