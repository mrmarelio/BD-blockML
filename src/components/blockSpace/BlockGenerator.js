import Blockly from "blockly";
import "blockly/javascript_compressed";
import "./BlockDefinitions";

Blockly.JavaScript.ORDER_ATOMIC = 0;
Blockly.JavaScript.ORDER_NONE = 0;

Blockly.JavaScript["html"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code =
    '<!DOCTYPE html>\n<html lang="en">\n' + statements_content + "</html>\n";
  return code;
};

Blockly.JavaScript["body"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");

  var code = "<body>\n" + statements_content + "</body>\n";
  return code;
};

Blockly.JavaScript["head"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code =
    '<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    statements_content +
    "</head>\n";
  return code;
};

Blockly.JavaScript["title"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code =
    "<title>" +
    (statements_content !== ""
      ? (document.getElementById("blockly-website-title").innerText =
          statements_content.trim())
      : (document.getElementById("blockly-website-title").innerText =
          "Svetainė be pavadinimo")) +
    "</title>\n";
  return code;
};

Blockly.JavaScript["paragraph"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<p>\n" + statements_content + "</p>\n";
  return code;
};

Blockly.JavaScript["justtext"] = function (block) {
  var text_content = block.getFieldValue("content");
  var code = text_content;
  return code;
};

Blockly.JavaScript["division"] = function (block) {
  var value_styling = Blockly.JavaScript.valueToCode(
    block,
    "styling",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<div" + value_styling + ">\n" + statements_content + "</div>\n";
  return code;
};

Blockly.JavaScript["style"] = function (block) {
  var statements_styling = Blockly.JavaScript.statementToCode(block, "styling");
  var code = ' style="' + statements_styling.trim() + '"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["color"] = function (block) {
  var colour_name = block.getFieldValue("NAME");
  var code = "color: " + colour_name + ";";
  return code;
};

Blockly.JavaScript["backgroundcolor"] = function (block) {
  var colour_name = block.getFieldValue("NAME");
  var code = "background-color: " + colour_name + ";";
  return code;
};

Blockly.JavaScript["generalstyle"] = function (block) {
  var text_property = block.getFieldValue("property");
  var text_value = block.getFieldValue("value");
  var code = text_property + ": " + text_value + ";";
  return code;
};

Blockly.JavaScript["generaltag"] = function (block) {
  var text_name = block.getFieldValue("NAME");
  var value_styling = Blockly.JavaScript.valueToCode(
    block,
    "styling",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code =
    "<" +
    text_name +
    value_styling +
    ">\n" +
    statements_content +
    "</" +
    text_name +
    ">\n";
  return code;
};

Blockly.JavaScript["linkto"] = function (block) {
  var text_target = block.getFieldValue("target");
  var value_styling = Blockly.JavaScript.valueToCode(
    block,
    "styling",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");

  var code =
    '<a href="' +
    text_target +
    '"' +
    value_styling +
    ">\n" +
    statements_content.trim() +
    "</a>\n";
  return code;
};

Blockly.JavaScript["span"] = function (block) {
  var value_styling = Blockly.JavaScript.valueToCode(
    block,
    "styling",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code =
    "<span" + value_styling + ">" + statements_content.trim() + "</span>\n";
  return code;
};

Blockly.JavaScript["image"] = function (block) {
  var text_image = block.getFieldValue("image");
  var text_alttext = block.getFieldValue("alttext");
  var code = '<img src="' + text_image + '" alt="' + text_alttext + '">\n';
  return code;
};

Blockly.JavaScript["emphasise"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<em>" + statements_content.trim() + "</em>\n";
  return code;
};

Blockly.JavaScript["strong"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<strong>" + statements_content.trim() + "</strong>\n";
  return code;
};

Blockly.JavaScript["heading"] = function (block) {
  var dropdown_headinglevel = block.getFieldValue("headinglevel");
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code =
    "<" +
    dropdown_headinglevel +
    ">" +
    statements_content.trim() +
    "</" +
    dropdown_headinglevel +
    ">\n";
  return code;
};

Blockly.JavaScript["linebreak"] = function (block) {
  var code = "<br>\n";
  return code;
};

Blockly.JavaScript["thematicbreak"] = function (block) {
  var code = "<hr>\n";
  return code;
};

Blockly.JavaScript["unorderedlist"] = function (block) {
  var value_styling = Blockly.JavaScript.valueToCode(
    block,
    "styling",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<ul" + value_styling + ">" + statements_content + "</ul>\n";
  return code;
};

Blockly.JavaScript["orderedlist"] = function (block) {
  var value_styling = Blockly.JavaScript.valueToCode(
    block,
    "styling",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<ol" + value_styling + ">" + statements_content + "</ul>\n";

  return code;
};

Blockly.JavaScript["listitem"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<li" + value_name + ">" + statements_content + "</li>\n";
  return code;
};

Blockly.JavaScript["inserted"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<ins>" + statements_content.trim() + "</ins>\n";
  return code;
};

Blockly.JavaScript["deleted"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<del>" + statements_content.trim() + "</del>\n";
  return code;
};

Blockly.JavaScript["super"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<sup>" + statements_content.trim() + "</sup>\n";
  return code;
};

Blockly.JavaScript["subscript"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<sub>" + statements_content.trim() + "</sub>\n";
  return code;
};

Blockly.JavaScript["code"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<code>" + statements_content.trim() + "</code>\n";
  return code;
};

Blockly.JavaScript["quote"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<q>" + statements_content.trim() + "</q>\n";
  return code;
};

Blockly.JavaScript["blockquote"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<blockquote>" + statements_content.trim() + "</blockquote>\n";
  return code;
};

Blockly.JavaScript["sampleoutput"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<samp>" + statements_content.trim() + "</samp>\n";
  return code;
};

Blockly.JavaScript["keyboardinput"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<kbd>" + statements_content.trim() + "</kbd>\n";
  return code;
};

Blockly.JavaScript["variable"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<var>" + statements_content.trim() + "</var>\n";
  return code;
};

Blockly.JavaScript["form"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<form>" + statements_content + "</form>\n";
  return code;
};

Blockly.JavaScript["table"] = function (block) {
  var value_styling = Blockly.JavaScript.valueToCode(
    block,
    "styling",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code =
    "<table" + value_styling + ">\n" + statements_content + "</table>\n";
  return code;
};

Blockly.JavaScript["tablerow"] = function (block) {
  var value_styling = Blockly.JavaScript.valueToCode(
    block,
    "styling",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<tr" + value_styling + ">\n" + statements_content + "</tr>\n";
  return code;
};

Blockly.JavaScript["tablecell"] = function (block) {
  var value_styling = Blockly.JavaScript.valueToCode(
    block,
    "styling",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code =
    "<td" + value_styling + ">\n" + statements_content.trim() + "\n</td>\n";
  return code;
};

Blockly.JavaScript["tableheader"] = function (block) {
  var value_styling = Blockly.JavaScript.valueToCode(
    block,
    "styling",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code =
    "<th" + value_styling + ">\n" + statements_content.trim() + "\n</th>\n";
  return code;
};

Blockly.JavaScript["inputtext"] = function (block) {
  var text_default = block.getFieldValue("default");
  var code = '<input value="' + text_default + '">\n';
  return code;
};

Blockly.JavaScript["button"] = function (block) {
  var value_styling = Blockly.JavaScript.valueToCode(
    block,
    "styling",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code =
    "<button" + value_styling + ">" + statements_content.trim() + "</button>\n";
  return code;
};

Blockly.JavaScript["input"] = function (block) {
  var dropdown_type = block.getFieldValue("type");
  var text_value = block.getFieldValue("value");
  var value_text = Blockly.JavaScript.valueToCode(
    block,
    "text",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code =
    '<input type="' +
    dropdown_type +
    '" value="' +
    text_value +
    '"' +
    value_text +
    " />\n";
  return code;
};

Blockly.JavaScript["script"] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<script>\n" + statements_content + "</script>\n";
  return code;
};

Blockly.JavaScript["onclick"] = function (block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  var code = ' onclick="' + statements_name.trim() + '"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["bodyattributes"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_content = Blockly.JavaScript.statementToCode(block, "content");
  var code = "<body" + value_name + ">\n" + statements_content + "</body>\n";
  return code;
};
