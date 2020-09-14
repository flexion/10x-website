import React from "react";
import { shallow } from "enzyme";
import Banner from "components/Banner";

describe("<Banner />", () => {
  describe("default render", () => {
    it("should render", () => {
      const wrapper = shallow(<Banner />);
      expect(wrapper.find(".usa-banner").length).toBe(1);
    });
  });
});
