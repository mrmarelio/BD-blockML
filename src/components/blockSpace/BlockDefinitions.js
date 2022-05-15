import Blockly from "blockly";

Blockly.Blocks["html"] = {
  init: function () {
    this.appendDummyInput().appendField("document");
    this.appendStatementInput("content").setCheck("document");
    this.setColour(330);
    this.setTooltip("Šis blokas žymi html dokumento šaknį");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html"
    );
  },
};

Blockly.Blocks["body"] = {
  init: function () {
    this.appendDummyInput().appendField("content");
    this.appendStatementInput("content").setCheck("html");
    this.setPreviousStatement(true, "document");
    this.setNextStatement(true, "document");
    this.setColour(330);
    this.setTooltip("Blokas, reprezentuojantis html dokumento turinį");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body"
    );
  },
};

Blockly.Blocks["head"] = {
  init: function () {
    this.appendDummyInput().appendField("header");
    this.appendStatementInput("content").setCheck("header");
    this.setPreviousStatement(true, "document");
    this.setNextStatement(true, "document");
    this.setColour(330);
    this.setTooltip("Blokas skirtas talpinti informacijai apie dokumentą");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"
    );
  },
};

Blockly.Blocks["title"] = {
  init: function () {
    this.appendStatementInput("content").setCheck("html").appendField("title");
    this.setPreviousStatement(true, "header");
    this.setNextStatement(true, "header");
    this.setColour(330);
    this.setTooltip("Blokas aprašantis dokumento pavadinimą");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title"
    );
  },
};

Blockly.Blocks["paragraph"] = {
  init: function () {
    this.appendStatementInput("content")
      .setCheck("html")
      .appendField("paragraph");
    this.setPreviousStatement(true, "html");
    this.setNextStatement(true, "html");
    this.setColour(180);
    this.setTooltip("Blokas leidžia įterpti pastraipą");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p"
    );
  },
};

Blockly.Blocks["justtext"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("text")
      .appendField(new Blockly.FieldTextInput(""), "content");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("Blokas, skirtas teksto įterpimui");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["division"] = {
  init: function () {
    this.appendValueInput("styling")
      .setCheck("attribute")
      .appendField("division");
    this.appendStatementInput("content").setCheck("html");
    this.setPreviousStatement(true, "html");
    this.setNextStatement(true, "html");
    this.setColour(180);
    this.setTooltip("Blokas yra bendras srauto konteineris");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"
    );
  },
};

Blockly.Blocks["style"] = {
  init: function () {
    this.appendDummyInput().appendField("style");
    this.appendStatementInput("styling").setCheck("css");
    this.setOutput(true, "attribute");
    this.setColour(225);
    this.setTooltip("Blokas skirtas pridėti stiliams");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps"
    );
  },
};

Blockly.Blocks["color"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("text color:")
      .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    this.setPreviousStatement(true, "css");
    this.setNextStatement(true, "css");
    this.setColour(225);
    this.setTooltip("Blokas skirtas pakeisti teksto spalvą");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/CSS/color");
  },
};

Blockly.Blocks["backgroundcolor"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("background color:")
      .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    this.setPreviousStatement(true, "css");
    this.setNextStatement(true, "css");
    this.setColour(225);
    this.setTooltip("Blokas skirtas pakeisti elemento fono spalvai");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/CSS/background-color"
    );
  },
};

Blockly.Blocks["widthstyle"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("width: ")
      .appendField(new Blockly.FieldTextInput("value"), "NAME");
    this.setPreviousStatement(true, "css");
    this.setNextStatement(true, "css");
    this.setColour(225);
    this.setTooltip("Blokas, skirtas nustatyti elemento ilgiui.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/CSS/width");
  },
};

Blockly.Blocks["heightstyle"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("height:")
      .appendField(new Blockly.FieldTextInput("value"), "NAME");
    this.setPreviousStatement(true, "css");
    this.setNextStatement(true, "css");
    this.setColour(225);
    this.setTooltip("Blokas, skirtas nustatyti elemento aukščiui.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/CSS/height");
  },
};

Blockly.Blocks["generalstyle"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("property"), "property")
      .appendField(":")
      .appendField(new Blockly.FieldTextInput("value"), "value");
    this.setPreviousStatement(true, "css");
    this.setNextStatement(true, "css");
    this.setColour(225);
    this.setTooltip("Blokas skirtas įvesti savo pasirinktiems stiliams");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index"
    );
  },
};

Blockly.Blocks["styleonclickconnect"] = {
  init: function () {
    this.appendValueInput("onclick").setCheck("attribute");
    this.appendValueInput("styling").setCheck("attribute");
    this.setOutput(true, "attribute");
    this.setColour(225);
    this.setTooltip(
      'Blokas skirtas pridėti ir stiliams, ir "onClick" komandai.'
    );
    this.setHelpUrl("");
  },
};

Blockly.Blocks["generaltag"] = {
  init: function () {
    this.appendValueInput("styling")
      .setCheck("attribute")
      .appendField("<")
      .appendField(new Blockly.FieldTextInput("tag"), "NAME")
      .appendField("/>");
    this.appendStatementInput("content").setCheck("html");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("Blokas skirtas įvesti savo žymoms");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning"
    );
  },
};

Blockly.Blocks["linkto"] = {
  init: function () {
    this.appendValueInput("styling")
      .setCheck("attribute")
      .appendField("link to")
      .appendField(new Blockly.FieldTextInput("target"), "target");
    this.appendStatementInput("content").setCheck("html");
    this.setPreviousStatement(true, "html");
    this.setNextStatement(true, "html");
    this.setColour(180);
    this.setTooltip(
      "Blokas sukuria hipersaitą į tinklalapius, failus, el. pašto adresus, vietas tame pačiame puslapyje ar bet ką kitą, kurį gali adresuoti URL."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
    );
  },
};

Blockly.Blocks["span"] = {
  init: function () {
    this.appendValueInput("styling").setCheck("attribute").appendField("span");
    this.appendStatementInput("content").setCheck("html");
    this.setPreviousStatement(true, "html");
    this.setNextStatement(true, "html");
    this.setColour(180);
    this.setTooltip("Blokas yra konteineris, skirtas formuluoti turinį,");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"
    );
  },
};

Blockly.Blocks["image"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("image")
      .appendField(new Blockly.FieldTextInput("url"), "image")
      .appendField("and")
      .appendField(new Blockly.FieldTextInput("alternative text"), "alttext");
    this.setPreviousStatement(true, "html");
    this.setNextStatement(true, "html");
    this.setColour(180);
    this.setTooltip("Blokas įterpia nuotrauką į dokumentą.");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"
    );
  },
};

Blockly.Blocks["emphasise"] = {
  init: function () {
    this.appendDummyInput().appendField("emphasise");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Blokas žymi tekstą, kuriame akcentuojamas kirčiavimas.");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em"
    );
  },
};

Blockly.Blocks["strong"] = {
  init: function () {
    this.appendDummyInput().appendField("important");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip(
      "Blokas nurodo, kad jo turinys yra labai svarbus, rimtas ar skubus."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong"
    );
  },
};

Blockly.Blocks["heading"] = {
  init: function () {
    this.appendValueInput("styling")
      .setCheck("attribute")
      .appendField("heading")
      .appendField(
        new Blockly.FieldDropdown([
          ["level 1", "h1"],
          ["level 2", "h2"],
          ["level 3", "h3"],
          ["level 4", "h4"],
          ["level 5", "h5"],
          ["level 6", "h6"],
        ]),
        "headinglevel"
      );
    this.appendStatementInput("content").setCheck("html");
    this.setPreviousStatement(true, "html");
    this.setNextStatement(true, "html");
    this.setColour(180);
    this.setTooltip(
      "Blokas atspindi šešis skyrių antraščių lygius nuo didžiausio iki mažiausio."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"
    );
  },
};

Blockly.Blocks["linebreak"] = {
  init: function () {
    this.appendDummyInput().appendField("line break");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("Blokas sukuria eilutės lūžį tekste");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br"
    );
  },
};

Blockly.Blocks["thematicbreak"] = {
  init: function () {
    this.appendDummyInput().appendField("topic break");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip(
      "Blokas reiškia teminę skirtį tarp pastraipos lygio elementų"
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr"
    );
  },
};

Blockly.Blocks["unorderedlist"] = {
  init: function () {
    this.appendValueInput("styling")
      .setCheck("attribute")
      .appendField("unordered list");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip(
      "Blokas yra nesutvarkytas elementų sąrašas, paprastai pateikiamas kaip sąrašas su ženkleliais."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"
    );
  },
};

Blockly.Blocks["orderedlist"] = {
  init: function () {
    this.appendValueInput("styling")
      .setCheck("attribute")
      .appendField("ordered list");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip(
      "Blokas yra sutvarkytas elementų sąrašas – paprastai pateikiamas kaip sunumeruotas sąrašas."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"
    );
  },
};

Blockly.Blocks["listitem"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("attribute")
      .appendField("list item");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("Blokas naudojamas sąrašo elementui atvaizduoti.");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li"
    );
  },
};

Blockly.Blocks["inserted"] = {
  init: function () {
    this.appendDummyInput().appendField("inserted");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip(
      "Blokas reiškia teksto diapazoną, kuris buvo įtrauktas į dokumentą."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins"
    );
  },
};

Blockly.Blocks["deleted"] = {
  init: function () {
    this.appendDummyInput().appendField("deleted");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip(
      "Blokas reiškia teksto diapazoną, kuris buvo ištrintas iš dokumento."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del"
    );
  },
};

Blockly.Blocks["super"] = {
  init: function () {
    this.appendDummyInput().appendField("superscript");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip(
      "Blokas nurodo tekstą, kuris turi būti rodomas kaip viršutinis indeksas."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup"
    );
  },
};

Blockly.Blocks["subscript"] = {
  init: function () {
    this.appendDummyInput().appendField("subscript");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip(
      "Blokas nurodo tekstą, kuris turėtų būti rodomas kaip apatinis indeksas."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub"
    );
  },
};

Blockly.Blocks["code"] = {
  init: function () {
    this.appendDummyInput().appendField("code");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip(
      "Blokas rodo jo turinį taip, kad būtų nurodyta, kad tekstas yra trumpas kompiuterio kodo fragmentas."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code"
    );
  },
};

Blockly.Blocks["quote"] = {
  init: function () {
    this.appendDummyInput().appendField("quote");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Blokas rodo, kad pridedamas tekstas yra trumpa citata.");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q"
    );
  },
};

Blockly.Blocks["blockquote"] = {
  init: function () {
    this.appendDummyInput().appendField("blockquote");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip(
      "Blokas rodo, kad pridedamas tekstas yra išplėstinė citata."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"
    );
  },
};

Blockly.Blocks["sampleoutput"] = {
  init: function () {
    this.appendDummyInput().appendField("sample output");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip(
      "Blokas naudojamas įtraukti į eilutę tekstą, kuris yra pavyzdinis kompiuterio programos išvestis."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp"
    );
  },
};

Blockly.Blocks["keyboardinput"] = {
  init: function () {
    this.appendDummyInput().appendField("keyboard input");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip(
      "Blokas reiškia teksto diapazoną, nurodantį vartotojo tekstinę įvestį iš klaviatūros, balso įvesties ar bet kurio kito teksto įvesties įrenginio."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd"
    );
  },
};

Blockly.Blocks["variable"] = {
  init: function () {
    this.appendDummyInput().appendField("variable");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip(
      "Blokas reiškia kintamojo pavadinimą matematinėje išraiškoje arba programavimo kontekste."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var"
    );
  },
};

Blockly.Blocks["form"] = {
  init: function () {
    this.appendDummyInput().appendField("form");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip(
      "Blokas reprezentuoja dokumento dalį, kurioje yra interaktyvūs informacijos pateikimo valdikliai."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
    );
  },
};

Blockly.Blocks["table"] = {
  init: function () {
    this.appendValueInput("styling").setCheck("attribute").appendField("table");
    this.appendStatementInput("content").setCheck("table");
    this.setPreviousStatement(true, "html");
    this.setNextStatement(true, "html");
    this.setColour(30);
    this.setTooltip("Blokas skirtas atvaizduoti lentelės duomenis.");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
    );
  },
};

Blockly.Blocks["tablerow"] = {
  init: function () {
    this.appendValueInput("styling").setCheck("attribute").appendField("row");
    this.appendStatementInput("content").setCheck("tablerow");
    this.setPreviousStatement(true, "table");
    this.setNextStatement(true, "table");
    this.setColour(30);
    this.setTooltip("Blokas apibrėžia langelių eilutę lentelėje.");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr"
    );
  },
};

Blockly.Blocks["tablecell"] = {
  init: function () {
    this.appendValueInput("styling").setCheck("attribute").appendField("cell");
    this.appendStatementInput("content").setCheck("html");
    this.setPreviousStatement(true, "tablerow");
    this.setNextStatement(true, "tablerow");
    this.setColour(30);
    this.setTooltip("Blokas apibrėžia lentelės langelį, kuriame yra duomenų.");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td"
    );
  },
};

Blockly.Blocks["tableheader"] = {
  init: function () {
    this.appendValueInput("styling")
      .setCheck("attribute")
      .appendField("table header");
    this.appendStatementInput("content").setCheck("html");
    this.setPreviousStatement(true, "tablerow");
    this.setNextStatement(true, "tablerow");
    this.setColour(30);
    this.setTooltip(
      "Blokas elementas apibrėžia langelį kaip lentelės langelių grupės antraštę."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th"
    );
  },
};

Blockly.Blocks["inputtext"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("text input")
      .appendField(new Blockly.FieldTextInput(""), "default");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip(
      "Blokas naudojamas kuriant interaktyvius žiniatinklio formų valdiklius, kad būtų galima priimti duomenis iš vartotojo."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
    );
  },
};

Blockly.Blocks["button"] = {
  init: function () {
    this.appendValueInput("styling")
      .setCheck("attribute")
      .appendField("button");
    this.appendStatementInput("content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip(
      "Blokas yra interaktyvus elementas, kurį vartotojas suaktyvina pele, klaviatūra, pirštu, balso komanda ar kita pagalbine technologija. Suaktyvinus, jis atlieka programuojamą veiksmą, pvz., pateikia formą arba atidaro dialogo langą."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"
    );
  },
};

Blockly.Blocks["input"] = {
  init: function () {
    this.appendValueInput("text")
      .setCheck(null)
      .appendField(
        new Blockly.FieldDropdown([
          ["text", "text"],
          ["email", "email"],
          ["number", "number"],
          ["password", "password"],
          ["checkbox", "checkbox"],
          ["radiobutton", "radio"],
          ["button", "button"],
          ["colour", "color"],
          ["date", "date"],
          ["local time", "datetime-local"],
          ["file", "file"],
          ["hidden", "hidden"],
          ["image", "image"],
          ["month", "month"],
          ["range", "range"],
          ["reset", "reset"],
          ["search", "search"],
          ["submit", "submit"],
          ["telephone number", "tel"],
          ["time", "time"],
          ["url", "url"],
          ["week", "week"],
        ]),
        "type"
      )
      .appendField("input")
      .appendField(new Blockly.FieldTextInput(""), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip(
      "Blokas naudojamas kuriant interaktyvius žiniatinklio formų valdiklius, kad būtų galima priimti duomenis iš vartotojo"
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
    );
  },
};

Blockly.Blocks["script"] = {
  init: function () {
    this.appendDummyInput().appendField("script");
    this.appendStatementInput("content").setCheck("code");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip(
      "Blokas naudojamas vykdomajam kodui arba duomenims įterpti;"
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script"
    );
  },
};

Blockly.Blocks["onclick"] = {
  init: function () {
    this.appendDummyInput().appendField("on click");
    this.appendStatementInput("NAME").setCheck("code");
    this.setOutput(true, "attribute");
    this.setColour(60);
    this.setTooltip(
      "Blokas nurodo tam tikrą scenarijų, kuris bus paleistas spustelėjus elementą."
    );
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/onclick"
    );
  },
};

Blockly.Blocks["bodyattributes"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck("attribute").appendField("content");
    this.appendStatementInput("content").setCheck("html");
    this.setPreviousStatement(true, "document");
    this.setNextStatement(true, "document");
    this.setColour(330);
    this.setTooltip("Blokas nurodo HTML dokumento turinį.");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body"
    );
  },
};
