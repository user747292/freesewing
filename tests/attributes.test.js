var expect = require("chai").expect;
var Point = require("../dist/index.js").Point;

function newAttr() {
  return new Point(0, 0).attributes;
}

it("should return false when getting an unset attribute", () => {
  let a = newAttr();
  expect(a.get("test")).to.equal(false);
});

it("should render attributes correctly", () => {
  let a = newAttr()
    .set("class", "test")
    .add("class", "render")
    .set("transform", "scale(1)");
  expect(a.render()).to.equal(' class="test render" transform="scale(1)"');
});

it("should render attributes with given prefix only", () => {
  let a = newAttr()
    .set("class", "test")
    .add("class", "render")
    .add("data-text", "foo")
    .add("data-text", "bar")
    .add("data-mode", "test")
    .set("transform", "scale(1)");
  expect(a.renderIfPrefixIs("data-")).to.equal(' text="foo bar" mode="test"');
});
