import React from "react";
import { render } from "@testing-library/react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter } from "react-router-dom";
import NavLogo from "../NavLogo";

configure({ adapter: new Adapter() });

describe("NavLogo", () => {
  it("should render main logo", () => {
    const { queryByTestId } = render(<NavLogo />, { wrapper: BrowserRouter });
    const element = queryByTestId("logo-link");
    expect(element).toBeInTheDocument();
  });
});
