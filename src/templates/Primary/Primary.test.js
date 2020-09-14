import React from "react";
import { shallow } from "enzyme";
import Primary from "templates/Primary";

describe("<Primary />", () => {
  describe("default render", () => {
    it("should render", () => {
      const wrapper = shallow(
        <Primary>
          <span className="test" />
        </Primary>
      );
      expect(wrapper.find(".test").length).toBe(1);
    });
  });
});
