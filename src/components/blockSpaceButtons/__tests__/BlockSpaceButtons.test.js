import React from "react";
import { render } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import testPropTypes from "features/testing/TestPropTypes";
import BlockSpaceButtons from "../BlockSpaceButtons";

configure({ adapter: new Adapter() });

describe("BlockSpaceButtons", () => {
  it("should render blockspace button with the default item name", () => {
    const { queryByTestId } = render(<BlockSpaceButtons />);
    const element = queryByTestId("blockspaceButton");
    expect(element).toBeInTheDocument();
  });

  it("should render with the given item name", () => {
    const button = shallow(<BlockSpaceButtons itemName="mygtukas1" />);

    expect(button.text()).toEqual("mygtukas1");
  });

  it("should require a string as an item name prop", () => {
    const testValues = [
      ["text", ""],
      [0, null],
    ];
    testPropTypes(BlockSpaceButtons, "itemName", testValues);
  });

  it("button should call onClick function", () => {
    const mockCallBack = jest.fn();
    const button = shallow(<BlockSpaceButtons onClick={mockCallBack} />);
    const findButton = button.find("button");
    findButton.prop("onClick")();
    expect(mockCallBack).toHaveBeenCalled();
  });
});
