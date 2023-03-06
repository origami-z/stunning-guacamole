import { getTokenFromObj, resolveToken } from "../../themes/resolve";
import { sampleValidColors } from "../../test-cases/sample-theme";

describe("getTokenFromObj", () => {
  test("resolve to token ok", () => {
    const result = getTokenFromObj(
      sampleValidColors,
      "color.red.10".split(".")
    );
    expect(result).toEqual(sampleValidColors.color.red[10]);
  });
});

describe("resolveToken", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  afterEach(() => jest.restoreAllMocks());

  test("direct value", () => {
    expect(resolveToken("{color.red.10}", sampleValidColors)).toEqual(
      sampleValidColors.color.red[10]
    );
  });
  test("nested reference", () => {
    expect(resolveToken("{nestedRefRed10}", sampleValidColors)).toEqual(
      sampleValidColors.color.red[10]
    );
  });
  test("self referencing infinite loop", () => {
    const errorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => Promise.resolve());

    expect(resolveToken("{selfReferencing}", sampleValidColors)).toBeNull();

    expect(errorSpy).toBeCalledWith(
      expect.stringContaining("Cannot resolve token")
    );
  });
});
