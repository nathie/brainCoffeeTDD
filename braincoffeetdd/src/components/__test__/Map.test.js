import React from "react";
import { shallow } from "enzyme";
import Map from "../Map";

describe("Map", () => {
  let mountedMap;

  beforeEach(() => {
    mountedMap = shallow(<Map />);
  });

  it("renders without crashing Map.js", () => {
    let mountedMap = shallow(<Map />);
  });

  it("renders a Map", () => {
    const img = mountedMap.find("img");
    expect(img.length).toBe(1);
  });
});
