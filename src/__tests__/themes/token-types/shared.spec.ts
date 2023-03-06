import {
  getValueReferenceInner,
  makeValueReference,
  TokenProperties,
} from "../../../themes/token-types/shared";

describe("getValueReferenceInner", () => {
  test("removes brackets", () => {
    expect(getValueReferenceInner("{abc.def}")).toEqual("abc.def");
  });
});

describe("makeValueReference", () => {
  test("adds brackets", () => {
    expect(makeValueReference("abc.def")).toEqual("{abc.def}");
  });
});


describe("TokenProperties", () => {
  test("dollar prefix keys", () => {
    ({
      $version: 1,
      $type: "color",
    } satisfies TokenProperties);
  });
});
