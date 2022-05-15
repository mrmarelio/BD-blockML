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
          type: "widthstyle",
        },
        {
          kind: "block",
          type: "heightstyle",
        },
        {
          kind: "block",
          type: "generalstyle",
        },
        {
          kind: "block",
          type: "styleonclickconnect",
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

const XmlWithDocument =
  '<xml xmlns="https://developers.google.com/blockly/xml"><block type="html" id="F~{iS:~|ib9?,e=x#$I9" x="30" y="90"><statement name="content"><block type="head" id="|v[1-8kXQtA.c799zTPC"><statement name="content"><block type="title" id="08R(q9GCRz}62ljkcBjP"><statement name="content"><block type="justtext" id="7~_@F8eo11}RdSCXN/J$"><field name="content"></field></block></statement></block></statement><next><block type="bodyattributes" id="S$#hLqllJI{aP:ZQq_L2"></block></next></block></statement></block></xml>';

const PresentationXmlConfig =
  '<xml xmlns="https://developers.google.com/blockly/xml"><block type="html" id="T}ml[PHerOY]k#Yg3-uq" x="50" y="110"><statement name="content"><block type="head" id=":Iaia`%Xt/IFkq9DPG*y"><statement name="content"><block type="title" id="}Fuymw6VMwIT)2~?y,EJ"><statement name="content"><block type="justtext" id="u?za`PDkhl1N-6)4i+(L"><field name="content">Svetainės pavadinimas</field></block></statement></block></statement><next><block type="bodyattributes" id="8(CPR}ulndKk[Ta)IGSU"><value name="NAME"><block type="style" id="syz6J*!.nTJ/q3O7F=oh"><statement name="styling"><block type="generalstyle" id="]y.#v_mSp%-~9ldB!5lk"><field name="property">padding</field><field name="value">0</field><next><block type="generalstyle" id="9O2Jm8)(?YN#nbABoAW7"><field name="property">margin</field><field name="value">0</field><next><block type="generalstyle" id="@wC6d%A,Q-.D%wJrroI7"><field name="property">box-size</field><field name="value">border-box</field></block></next></block></next></block></statement></block></value><statement name="content"><block type="generaltag" id="%w+$bB:);4Wt~]DPCd,1"><field name="NAME">nav</field><value name="styling"><block type="style" id="L3s:oFpQ2(zLt61=d}%a"><statement name="styling"><block type="generalstyle" id="Lq=n3^lYlVLoLX2gL_2%"><field name="property">width</field><field name="value">100vw</field><next><block type="generalstyle" id="`]=Hin)vt4Ht9Z),6_#u"><field name="property">height</field><field name="value">80px</field><next><block type="backgroundcolor" id="V=m]Nl`N#2;1~5d-9yck"><field name="NAME">#ff0000</field><next><block type="generalstyle" id="fL9UQ2I+_@.F$cpJ:Pkn"><field name="property">align-items</field><field name="value">center</field><next><block type="generalstyle" id="gh3{q5*kS:%:$fg2GRdn"><field name="property">display</field><field name="value">flex</field><next><block type="generalstyle" id="/Ea]QffMTh2=xwzxxHy="><field name="property">justify-content</field><field name="value">space-around</field></block></next></block></next></block></next></block></next></block></next></block></statement></block></value><statement name="content"><block type="unorderedlist" id="XZk{OC3[aZCGOKVv8iEQ"><value name="styling"><block type="style" id="#vfsImF-*{C5JMftB+Ut"><statement name="styling"><block type="generalstyle" id="r5x|-B=XEq@*%Ty{f(Sr"><field name="property">margin</field><field name="value">0</field><next><block type="generalstyle" id="2q{C;]{r24%z6+5K!{/."><field name="property">list-style</field><field name="value">none</field><next><block type="generalstyle" id=":EnJ*g;`z=uK/Bqjllcn"><field name="property">display</field><field name="value">flex</field><next><block type="generalstyle" id="rvTTnrqK-TkX|`zNA+-t"><field name="property">justify-content</field><field name="value">space-around</field><next><block type="generalstyle" id="l6%GES8E6L}$rhomu#eZ"><field name="property">width</field><field name="value">100%</field></block></next></block></next></block></next></block></next></block></statement></block></value><statement name="content"><block type="listitem" id="HSzdrpxh_3|]v@eU1#v%"><statement name="content"><block type="justtext" id="%eooE#k6e`Kwc3t$tmSl"><field name="content">Pagrindinis</field></block></statement><next><block type="listitem" id="*-Kh6e,+YQ~UPl9-(|O/"><statement name="content"><block type="justtext" id="w#dNJ]@Rn9}fPf3pmE+u"><field name="content">Kurti svetainę</field></block></statement><next><block type="listitem" id="ZU%K8?Yn0a%f#4Of#Jh0"><statement name="content"><block type="justtext" id="{6qB~v[{WfD!~=.Y!si/"><field name="content">Kontaktai</field></block></statement></block></next></block></next></block></statement></block></statement><next><block type="heading" id="5x=]FfjN.$r[=}kjze($"><field name="headinglevel">h2</field><value name="styling"><block type="style" id="TaEb]z_f@[C9HV!cueit"><statement name="styling"><block type="generalstyle" id="@?9:!Y9G1#J3+l;jHzU_"><field name="property">margin</field><field name="value">0</field></block></statement></block></value><statement name="content"><block type="justtext" id="#5^Q@R98.Vv:zb5N8]qU"><field name="content">Pagrindinis</field></block></statement></block></next></block></statement><next><block type="script" id="?GgEfgKG~glcx;5zauy}"></block></next></block></next></block></statement></block></xml>';

/*
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="html" id="T}ml[PHerOY]k#Yg3-uq" x="10" y="10">
    <statement name="content">
      <block type="head" id=":Iaia`%Xt/IFkq9DPG*y">
        <statement name="content">
          <block type="title" id="}Fuymw6VMwIT)2~?y,EJ">
            <statement name="content">
              <block type="justtext" id="u?za`PDkhl1N-6)4i+(L">
                <field name="content">Svetainė pristatymui</field>
              </block>
            </statement>
          </block>
        </statement>
        <next>
          <block type="bodyattributes" id="8(CPR}ulndKk[Ta)IGSU">
            <value name="NAME">
              <block type="style" id="syz6J*!.nTJ/q3O7F=oh">
                <statement name="styling">
                  <block type="generalstyle" id="]y.#v_mSp%-~9ldB!5lk">
                    <field name="property">padding</field>
                    <field name="value">0</field>
                    <next>
                      <block type="generalstyle" id="9O2Jm8)(?YN#nbABoAW7">
                        <field name="property">margin</field>
                        <field name="value">0</field>
                        <next>
                          <block type="generalstyle" id="@wC6d%A,Q-.D%wJrroI7">
                            <field name="property">box-size</field>
                            <field name="value">border-box</field>
                            <next>
                              <block
                                type="generalstyle"
                                id="rc]nV#O^$DT$NJG!S*Lc"
                              >
                                <field name="property">font-family</field>
                                <field name="value">'Roboto"</field>
                                <next>
                                  <block
                                    type="generalstyle"
                                    id=",c[50)Pp2K#)3Ce;r%xg"
                                  >
                                    <field name="property">width</field>
                                    <field name="value">100vw</field>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
              </block>
            </value>
            <statement name="content">
              <block type="generaltag" id="%w+$bB:);4Wt~]DPCd,1">
                <field name="NAME">nav</field>
                <value name="styling">
                  <block type="style" id="L3s:oFpQ2(zLt61=d}%a">
                    <statement name="styling">
                      <block type="heightstyle" id="JQv{m8jT/#X?;Mf0hWwI">
                        <field name="NAME">80px</field>
                        <next>
                          <block type="generalstyle" id="fL9UQ2I+_@.F$cpJ:Pkn">
                            <field name="property">align-items</field>
                            <field name="value">center</field>
                            <next>
                              <block
                                type="generalstyle"
                                id="/z:r[wZoi|#t]ACYgxK`"
                              >
                                <field name="property">background-color</field>
                                <field name="value">#526d80</field>
                                <next>
                                  <block
                                    type="generalstyle"
                                    id="ga}1JWB=*@!7sl;Qy^Z|"
                                  >
                                    <field name="property">
                                      letter-spacing
                                    </field>
                                    <field name="value">0.04em</field>
                                    <next>
                                      <block
                                        type="generalstyle"
                                        id="gh3{q5*kS:%:$fg2GRdn"
                                      >
                                        <field name="property">display</field>
                                        <field name="value">flex</field>
                                        <next>
                                          <block
                                            type="generalstyle"
                                            id="/Ea]QffMTh2=xwzxxHy="
                                          >
                                            <field name="property">
                                              justify-content
                                            </field>
                                            <field name="value">
                                              space-around
                                            </field>
                                            <next>
                                              <block
                                                type="generalstyle"
                                                id="lHm|l=@8R#eXZ?S9:X7!"
                                              >
                                                <field name="property">
                                                  font-size
                                                </field>
                                                <field name="value">
                                                  1.1em
                                                </field>
                                                <next>
                                                  <block
                                                    type="generalstyle"
                                                    id="U_iSrQeo5O7@=-),d7yt"
                                                  >
                                                    <field name="property">
                                                      letter-spacing
                                                    </field>
                                                    <field name="value">
                                                      0.04em
                                                    </field>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                  </block>
                </value>
                <statement name="content">
                  <block type="linkto" id="`^0iKhe#^Na/KZ]rc4L!">
                    <field name="target">#document</field>
                    <value name="styling">
                      <block type="style" id="6=d8ih_yy(4Fq4@5.1]A">
                        <statement name="styling">
                          <block type="generalstyle" id="ui.1PKdKV@7s^|#$Gj?q">
                            <field name="property">height</field>
                            <field name="value">80px</field>
                            <next>
                              <block
                                type="generalstyle"
                                id="y?DuG*DXt3^zP#L[e2yC"
                              >
                                <field name="property">padding-left</field>
                                <field name="value">10px</field>
                              </block>
                            </next>
                          </block>
                        </statement>
                      </block>
                    </value>
                    <statement name="content">
                      <block type="division" id="QUG[#@CM^#kkmN{R:q,:">
                        <statement name="content">
                          <block type="image" id="mz@Ri6VUBs[tVlS7g:Q`">
                            <field name="image">
                              http://localhost:3000/static/media/bdLogoMain.ee77f838e7244e641e6357b497ebadf1.svg
                            </field>
                            <field name="alttext">
                              Main logo of the website
                            </field>
                          </block>
                        </statement>
                      </block>
                    </statement>
                    <next>
                      <block type="unorderedlist" id="XZk{OC3[aZCGOKVv8iEQ">
                        <value name="styling">
                          <block type="style" id="#vfsImF-*{C5JMftB+Ut">
                            <statement name="styling">
                              <block
                                type="generalstyle"
                                id=".+-PVOAm0bO_y5mG$ehH"
                              >
                                <field name="property">align-items</field>
                                <field name="value">center</field>
                                <next>
                                  <block
                                    type="generalstyle"
                                    id="r5x|-B=XEq@*%Ty{f(Sr"
                                  >
                                    <field name="property">margin</field>
                                    <field name="value">0</field>
                                    <next>
                                      <block
                                        type="generalstyle"
                                        id="2q{C;]{r24%z6+5K!{/."
                                      >
                                        <field name="property">
                                          list-style
                                        </field>
                                        <field name="value">none</field>
                                        <next>
                                          <block
                                            type="generalstyle"
                                            id=":EnJ*g;`z=uK/Bqjllcn"
                                          >
                                            <field name="property">
                                              display
                                            </field>
                                            <field name="value">flex</field>
                                            <next>
                                              <block
                                                type="generalstyle"
                                                id="rvTTnrqK-TkX|`zNA+-t"
                                              >
                                                <field name="property">
                                                  justify-content
                                                </field>
                                                <field name="value">
                                                  space-around
                                                </field>
                                                <next>
                                                  <block
                                                    type="generalstyle"
                                                    id="l6%GES8E6L}$rhomu#eZ"
                                                  >
                                                    <field name="property">
                                                      width
                                                    </field>
                                                    <field name="value">
                                                      100%
                                                    </field>
                                                    <next>
                                                      <block
                                                        type="heightstyle"
                                                        id="5%vT/SVa9anocI!{EA{y"
                                                      >
                                                        <field name="NAME">
                                                          80px
                                                        </field>
                                                        <next>
                                                          <block
                                                            type="generalstyle"
                                                            id="}Y8fq|*o!X-F5U#}Ux}H"
                                                          >
                                                            <field name="property">
                                                              text-transform
                                                            </field>
                                                            <field name="value">
                                                              uppercase
                                                            </field>
                                                            <next>
                                                              <block
                                                                type="generalstyle"
                                                                id="*#1sgY%gt^;l;6G}qK;("
                                                              >
                                                                <field name="property">
                                                                  padding
                                                                </field>
                                                                <field name="value">
                                                                  0
                                                                </field>
                                                              </block>
                                                            </next>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </statement>
                          </block>
                        </value>
                        <statement name="content">
                          <block type="listitem" id="HSzdrpxh_3|]v@eU1#v%">
                            <statement name="content">
                              <block type="linkto" id="/la7@3}}u7MigdD4w?!y">
                                <field name="target">#document</field>
                                <value name="styling">
                                  <block type="style" id=";A{9.|7NNNJiM=U]c.a2">
                                    <statement name="styling">
                                      <block
                                        type="generalstyle"
                                        id="oYs!eslm-|B~nPFaOXUn"
                                      >
                                        <field name="property">color</field>
                                        <field name="value">#f4f4f5</field>
                                        <next>
                                          <block
                                            type="generalstyle"
                                            id="6Nu+^=aDkl2tB~^=zrTQ"
                                          >
                                            <field name="property">
                                              text-decoration
                                            </field>
                                            <field name="value">none</field>
                                          </block>
                                        </next>
                                      </block>
                                    </statement>
                                  </block>
                                </value>
                                <statement name="content">
                                  <block
                                    type="justtext"
                                    id="PY|)u3QSZ!d]gM=bzATN"
                                  >
                                    <field name="content">Pagrindinis</field>
                                  </block>
                                </statement>
                              </block>
                            </statement>
                            <next>
                              <block type="listitem" id="*-Kh6e,+YQ~UPl9-(|O/">
                                <statement name="content">
                                  <block
                                    type="linkto"
                                    id="(X3=40x04MvC6`(WBF{{"
                                  >
                                    <field name="target">svetaine.html</field>
                                    <value name="styling">
                                      <block
                                        type="style"
                                        id="0YnJ%L0-6L?#s!qA4YnC"
                                      >
                                        <statement name="styling">
                                          <block
                                            type="generalstyle"
                                            id="9@nm`:x4k,mQ_+n:hvrM"
                                          >
                                            <field name="property">color</field>
                                            <field name="value">#f4f4f5</field>
                                            <next>
                                              <block
                                                type="generalstyle"
                                                id="OojpllXK?YWPAa(BV~21"
                                              >
                                                <field name="property">
                                                  text-decoration
                                                </field>
                                                <field name="value">none</field>
                                              </block>
                                            </next>
                                          </block>
                                        </statement>
                                      </block>
                                    </value>
                                    <statement name="content">
                                      <block
                                        type="justtext"
                                        id="zZEZ|q0=(/haHxMX#m|v"
                                      >
                                        <field name="content">
                                          Kurti svetainę
                                        </field>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                                <next>
                                  <block
                                    type="listitem"
                                    id="ZU%K8?Yn0a%f#4Of#Jh0"
                                  >
                                    <statement name="content">
                                      <block
                                        type="linkto"
                                        id="h;dKk8mELKB19|i*|J#o"
                                      >
                                        <field name="target">
                                          kontaktai.html
                                        </field>
                                        <value name="styling">
                                          <block
                                            type="style"
                                            id="h5^9m=).Wrk]t5u.$Ew3"
                                          >
                                            <statement name="styling">
                                              <block
                                                type="generalstyle"
                                                id="1dc|d35BSp#d9x]K-tO."
                                              >
                                                <field name="property">
                                                  color
                                                </field>
                                                <field name="value">
                                                  #f4f4f5
                                                </field>
                                                <next>
                                                  <block
                                                    type="generalstyle"
                                                    id="@(V8g~2Kb[nWLoeK$~t@"
                                                  >
                                                    <field name="property">
                                                      text-decoration
                                                    </field>
                                                    <field name="value">
                                                      none
                                                    </field>
                                                  </block>
                                                </next>
                                              </block>
                                            </statement>
                                          </block>
                                        </value>
                                        <statement name="content">
                                          <block
                                            type="justtext"
                                            id="{6qB~v[{WfD!~=.Y!si/"
                                          >
                                            <field name="content">
                                              Kontaktai
                                            </field>
                                          </block>
                                        </statement>
                                      </block>
                                    </statement>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                        <next>
                          <block type="division" id="7yqo9|pPA9(5[Cg5^,L|">
                            <value name="styling">
                              <block type="style" id="3m.]s=zf63+KJlWs0yBz">
                                <statement name="styling">
                                  <block
                                    type="widthstyle"
                                    id="=T?21D2`;bs^fn0)7KT:"
                                  >
                                    <field name="NAME">160px</field>
                                  </block>
                                </statement>
                              </block>
                            </value>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="division" id="Q+hvvE$p(xrywiNPuAW`">
                    <value name="styling">
                      <block type="style" id="Nc9Mr)OCg)!VbnG6mZqq">
                        <statement name="styling">
                          <block type="generalstyle" id="YN*;ce(md?h.LFMJhKvu">
                            <field name="property">background-color</field>
                            <field name="value">#dee2e6</field>
                            <next>
                              <block
                                type="generalstyle"
                                id="OV,]85}tdAp.cY*zN^H,"
                              >
                                <field name="property">display</field>
                                <field name="value">flex</field>
                                <next>
                                  <block
                                    type="generalstyle"
                                    id="EDRJ^D-Ce}iqcRNE,l4+"
                                  >
                                    <field name="property">
                                      flex-direction
                                    </field>
                                    <field name="value">column</field>
                                    <next>
                                      <block
                                        type="generalstyle"
                                        id="enq-je-hu]`;gV3e0[re"
                                      >
                                        <field name="property">
                                          justify-content
                                        </field>
                                        <field name="value">flex-start</field>
                                        <next>
                                          <block
                                            type="generalstyle"
                                            id="3]x4;z.siWgnp!%MlCT{"
                                          >
                                            <field name="property">
                                              height
                                            </field>
                                            <field name="value">100vh</field>
                                            <next>
                                              <block
                                                type="generalstyle"
                                                id="KW)8Uq,Og.]nZ-%5}3zA"
                                              >
                                                <field name="property">
                                                  padding
                                                </field>
                                                <field name="value">
                                                  70px 130px
                                                </field>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                      </block>
                    </value>
                    <statement name="content">
                      <block type="division" id="sPr`B)[`v3Q.hr:5,oA?">
                        <value name="styling">
                          <block type="style" id="T[0Z-.2fB2,T%@tpar6X">
                            <statement name="styling">
                              <block
                                type="generalstyle"
                                id="t$7Kt5f]1RR.$@AmU#uv"
                              >
                                <field name="property">align-items</field>
                                <field name="value">center</field>
                                <next>
                                  <block
                                    type="generalstyle"
                                    id="s.h9R|VGhspE(d?2T#(f"
                                  >
                                    <field name="property">
                                      background-color
                                    </field>
                                    <field name="value">#526d80</field>
                                    <next>
                                      <block
                                        type="generalstyle"
                                        id="7aP|Dcj/$Sj*wXG++G#m"
                                      >
                                        <field name="property">
                                          border-radius
                                        </field>
                                        <field name="value">10px</field>
                                        <next>
                                          <block
                                            type="generalstyle"
                                            id="g^`sa6Ml~dT+^HC[^CH("
                                          >
                                            <field name="property">
                                              box-shadow
                                            </field>
                                            <field name="value">
                                              0 16px 38px -12px rgb(0 0 0 /
                                              56%), 0 4px 25px 0 rgb(0 0 0 /
                                              12%), 0 8px 10px -5px rgb(0 0 0 /
                                              20%)
                                            </field>
                                            <next>
                                              <block
                                                type="generalstyle"
                                                id="~A203s!5kXC-i@sw,l8^"
                                              >
                                                <field name="property">
                                                  color
                                                </field>
                                                <field name="value">
                                                  #f4f4f5
                                                </field>
                                                <next>
                                                  <block
                                                    type="generalstyle"
                                                    id="YKZJVG5x%3MAFb$Z^w`N"
                                                  >
                                                    <field name="property">
                                                      min-height
                                                    </field>
                                                    <field name="value">
                                                      50vh
                                                    </field>
                                                    <next>
                                                      <block
                                                        type="generalstyle"
                                                        id="sooD6Q!1_r@^dw|!#`g@"
                                                      >
                                                        <field name="property">
                                                          max-height
                                                        </field>
                                                        <field name="value">
                                                          80vh
                                                        </field>
                                                        <next>
                                                          <block
                                                            type="generalstyle"
                                                            id="d%)q0w80yR+Tmeg]8lMi"
                                                          >
                                                            <field name="property">
                                                              padding
                                                            </field>
                                                            <field name="value">
                                                              30px 60px
                                                            </field>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </statement>
                          </block>
                        </value>
                        <statement name="content">
                          <block type="heading" id="#.wlJj/R@[):]zZu^t6$">
                            <field name="headinglevel">h1</field>
                            <value name="styling">
                              <block type="style" id="}4-25$i`]wwsQ:X2e{_F">
                                <statement name="styling">
                                  <block
                                    type="generalstyle"
                                    id="=D6Gy)TW8A@!CEy;vrv`"
                                  >
                                    <field name="property">margin</field>
                                    <field name="value">6px 0</field>
                                  </block>
                                </statement>
                              </block>
                            </value>
                            <statement name="content">
                              <block type="justtext" id="1;yHSRXsaUWERA65sGaK">
                                <field name="content">
                                  BlockML - Block Markup Language
                                </field>
                              </block>
                            </statement>
                            <next>
                              <block type="heading" id="(_[:Q8smfLE3NzZzmY(z">
                                <field name="headinglevel">h2</field>
                                <value name="styling">
                                  <block type="style" id=".{%3O-Ovu}me?0Ye0hX:">
                                    <statement name="styling">
                                      <block
                                        type="generalstyle"
                                        id="XLw^I8I!^QPQw2gK,vKA"
                                      >
                                        <field name="property">
                                          font-weight
                                        </field>
                                        <field name="value">normal</field>
                                        <next>
                                          <block
                                            type="generalstyle"
                                            id="vUyYWF/2!cEQLPcBZ6BT"
                                          >
                                            <field name="property">
                                              margin
                                            </field>
                                            <field name="value">12px 0</field>
                                          </block>
                                        </next>
                                      </block>
                                    </statement>
                                  </block>
                                </value>
                                <statement name="content">
                                  <block
                                    type="justtext"
                                    id="!/TGx.kpJ#Z}MdwP]|~7"
                                  >
                                    <field name="content">
                                      Vaizdinio programavimo įrankis, skirtas
                                      kurti svetaines taikant JavaScript
                                      biblioteką &amp;quot;Blockly&amp;quot;.
                                    </field>
                                  </block>
                                </statement>
                                <next>
                                  <block
                                    type="thematicbreak"
                                    id="lJWWeFSsX@i_}M{Zsn[i"
                                  >
                                    <next>
                                      <block
                                        type="generaltag"
                                        id="X$@~,$aMEJXW!%NCxN;B"
                                      >
                                        <field name="NAME">section</field>
                                        <statement name="content">
                                          <block
                                            type="heading"
                                            id="=$S!jSD]UTdh![qwQZck"
                                          >
                                            <field name="headinglevel">
                                              h3
                                            </field>
                                            <value name="styling">
                                              <block
                                                type="style"
                                                id="3(XTPe?Mjta1G8:|`#9h"
                                              >
                                                <statement name="styling">
                                                  <block
                                                    type="generalstyle"
                                                    id=";hHz$RV{Nw`ZbI1201.."
                                                  >
                                                    <field name="property">
                                                      font-weight
                                                    </field>
                                                    <field name="value">
                                                      normal
                                                    </field>
                                                  </block>
                                                </statement>
                                              </block>
                                            </value>
                                            <statement name="content">
                                              <block
                                                type="justtext"
                                                id="M{O{%*,~8B(u:Jkpvdag"
                                              >
                                                <field name="content">
                                                  Bakalauro darbo tema:{" "}
                                                </field>
                                                <next>
                                                  <block
                                                    type="linebreak"
                                                    id="qn[x*zJF{7]j*z/Sj`C["
                                                  >
                                                    <next>
                                                      <block
                                                        type="justtext"
                                                        id="klW~M#|(BA`dfWeSDL%["
                                                      >
                                                        <field name="content">
                                                          Mokomosios svetainės
                                                          kūrimas taikant
                                                          vaizdinio programavimo
                                                          principus skirtos html
                                                          ir css pagrindų
                                                          mokymui.
                                                        </field>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </next>
                                              </block>
                                            </statement>
                                            <next>
                                              <block
                                                type="paragraph"
                                                id="`0WZ.T;bxN7qpqru~KLz"
                                              >
                                                <statement name="content">
                                                  <block
                                                    type="justtext"
                                                    id="W6~U72q4heg|iyK{db7}"
                                                  >
                                                    <field name="content">
                                                      Dėstytojas: Oleg Bystrov
                                                    </field>
                                                  </block>
                                                </statement>
                                              </block>
                                            </next>
                                          </block>
                                        </statement>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                      </block>
                    </statement>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>;
*/
const WorkspaceConfig = {
  ToolboxConfig,
  InitialXmlConfig,
  XmlWithDocument,
  PresentationXmlConfig,
};

export default WorkspaceConfig;
