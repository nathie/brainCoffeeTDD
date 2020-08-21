import mapChooser from "../mapChooser";

describe("mapChoose", () => {
  it("returns an image when it is passed to it", () => {
    let expected = "vancouver.jpg";
    let actual = mapChooser("vancouver");
    expect(actual).toEqual(expected);
  });

  it("returns an image when it is passed to it", () => {
    let expected = "default.jpg";
    let actual = mapChooser("");
    expect(actual).toEqual(expected);
  });
});
