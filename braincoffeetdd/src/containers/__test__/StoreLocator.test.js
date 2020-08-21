import React from "react";
import { shallow } from "enzyme";
import StoreLocator from "../StoreLocator";

describe("Store Locator", () => {
  let mountedStoreLocator;
  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("renders StoreLocator", () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("renders Header", () => {
    const headers = mountedStoreLocator.find("Header");
    expect(headers.length).toBe(1);
  });

  it("renders 2 Buttons", () => {
    const buttons = mountedStoreLocator.find("Button");
    expect(buttons.length).toBe(2);
  });

  it("renders 1 Map", () => {
    const map = mountedStoreLocator.find("Map");
    expect(map.length).toBe(1);
  });
});
