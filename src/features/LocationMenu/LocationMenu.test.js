import React from "react";
import { mount } from "enzyme";
import Menu from "components/Menu";

describe("<Menu />", () => {
  describe("default render", () => {
    it("should render", () => {
      const wrapper = mount(<Menu />);
      expect(wrapper.text()).toBe("10x");
    });
  });
});
