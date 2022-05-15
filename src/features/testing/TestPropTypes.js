import React from "react";

const testPropTypes = function (
  component,
  propName,
  arraysOfTestValues,
  otherProps
) {
  console.error = jest.fn();
  const _test = (testValues, expectError) => {
    for (let propValue of testValues) {
      console.error.mockClear();
      React.createElement(component, {
        ...otherProps,
        [propName]: propValue,
      });
      expect(console.error).toHaveBeenCalledTimes(expectError ? 1 : 0);
    }
  };
  _test(arraysOfTestValues[0], false);
  _test(arraysOfTestValues[1], true);
};

export default testPropTypes;
