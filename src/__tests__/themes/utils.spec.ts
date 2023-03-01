import { simpleSample } from "../../themes/sample";
import { convertThemeObjToCss } from "../../themes/utils";

describe("convertThemeObjToCss", () => {
  test("converts single token", () => {
    expect(
      convertThemeObjToCss({
        active: {
          type: "color",
          // Orange 800
          value: {
            r: 204,
            g: 68,
            b: 13,
          },
        },
      })
    ).toEqual(["active: rgb(204, 68, 13)"]);
  });

  test("converts nested token", () => {
    expect(
      convertThemeObjToCss({
        background: {
          type: "color",
          // Orange 700
          value: {
            r: 214,
            g: 85,
            b: 19,
          },
          active: {
            type: "color",
            // Orange 800
            value: {
              r: 204,
              g: 68,
              b: 13,
            },
          },
        },
      })
    ).toEqual([
      "background: rgb(214, 85, 19)",
      "background-active: rgb(204, 68, 13)",
    ]);
  });

  test("converts sample token", () => {
    expect(convertThemeObjToCss(simpleSample)).toEqual([
      "interact-cta-background: rgb(214, 85, 19)",
      "interact-cta-background-hover: rgb(204, 68, 13)",
      "interact-background-active: rgb(243, 189, 238)",
    ]);
  });
});
