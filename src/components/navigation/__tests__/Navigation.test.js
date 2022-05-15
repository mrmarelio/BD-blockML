import React from "react";
import { render } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter } from "react-router-dom";
import testPropTypes from "features/testing/TestPropTypes";
import NavigationItem from "../NavigationItem";

configure({ adapter: new Adapter() });

describe("NavigationItem", () => {
  it("should render navigation item with the default item name", () => {
    const { queryByTestId } = render(<NavigationItem />, {
      wrapper: BrowserRouter,
    });
    const element = queryByTestId("navigation");
    expect(element).toBeInTheDocument();
  });

  it("should render with the given item name", () => {
    const navItem = shallow(<NavigationItem itemName="navItem" />);
    expect(navItem.text()).toEqual("navItem");
  });

  it("item name and link props should require string", () => {
    const testValues = [
      ["text", ""],
      [0, null],
    ];
    testPropTypes(NavigationItem, "link", testValues);
    testPropTypes(NavigationItem, "itemName", testValues);
  });

  it("navigation item should call onClick function", () => {
    const mockCallBack = jest.fn();
    const navItem = shallow(<NavigationItem onClick={mockCallBack} />);
    const navItemID = navItem.find("#navigation");
    navItemID.prop("onClick")();
    expect(mockCallBack).toHaveBeenCalled();
  });
});
