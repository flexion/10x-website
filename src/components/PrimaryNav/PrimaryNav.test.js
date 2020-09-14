import React from "react";
import { mount } from "enzyme";
import PrimaryNav from "components/PrimaryNav";
import TestProvider from "test/TestProvider";

const items1 = [
  {
    text: "test",
    url: "/test",
  },
  {
    text: "test2",
    url: "/test2",
  },
  {
    text: "test3",
    url: "/test3",
  },
];

const items2 = [
  {
    text: "test1",
    url: "/test1",
    items: [
      {
        text: "test-1-1",
        url: "/test1/1",
      },
      {
        text: "test-1-2",
        url: "/test1/2",
      },
    ],
  },
];

describe("<PrimaryNav />", () => {
  describe("default render", () => {
    it("should render", () => {
      const wrapper = mount(
        <TestProvider>
          <PrimaryNav items={items1} />
        </TestProvider>
      );
      expect(wrapper.find(".usa-nav__primary-item").length).toBe(3);
    });
    it("should render nested menu", () => {
      const wrapper = mount(
        <TestProvider>
          <PrimaryNav items={items2} />
        </TestProvider>
      );
      expect(wrapper.find(".usa-nav__submenu-item").length).toBe(2);
    });
  });
});
