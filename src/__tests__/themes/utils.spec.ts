import { ColorOnlySampleTokens, TextSampleTokens } from "../../themes/sample";
import { convertThemeObjToCss, isThemeToken } from "../../themes/utils";

describe("isThemeToken", () => {
  describe("color token", () => {
    test("returns true for rgb value", () => {
      expect(
        isThemeToken({
          $type: "color",
          // Orange 800
          $value: {
            r: 204,
            g: 68,
            b: 13,
          },
        })
      ).toEqual(true);
    });

    test("returns true for reference value", () => {
      expect(
        isThemeToken({
          $type: "color",
          // Orange 800
          $value: "{a.b.c}",
        })
      ).toEqual(true);
    });
  });
});

describe("convertThemeObjToCss", () => {
  describe("Color tokens", () => {
    test("converts single token", () => {
      expect(
        convertThemeObjToCss({
          active: {
            $type: "color",
            // Orange 800
            $value: {
              r: 204,
              g: 68,
              b: 13,
            },
          },
        })
      ).toEqual(["--active: rgb(204, 68, 13);"]);
    });

    test("converts token with value reference", () => {
      expect(
        convertThemeObjToCss({
          active: {
            $type: "color",
            // Orange 800
            $value: "{a.b.c}",
          },
        })
      ).toEqual(["--active: var(--a-b-c);"]);
    });

    test("converts nested token", () => {
      expect(
        convertThemeObjToCss({
          background: {
            $type: "color",
            // Orange 700
            $value: {
              r: 214,
              g: 85,
              b: 19,
            },
            active: {
              $type: "color",
              // Orange 800
              $value: {
                r: 204,
                g: 68,
                b: 13,
              },
            },
          },
        })
      ).toEqual([
        "--background: rgb(214, 85, 19);",
        "--background-active: rgb(204, 68, 13);",
      ]);
    });
  });

  describe("Sample tokens", () => {
    test("converts color sample token", () => {
      expect(convertThemeObjToCss(ColorOnlySampleTokens)).toEqual([
        "--salt-palette-interact-cta-background: rgb(214, 85, 19);",
        "--salt-palette-interact-cta-background-hover: rgb(204, 68, 13);",
        "--salt-palette-interact-primary-background: var(--salt-color-gray-60);",
        "--salt-palette-interact-primary-background-hover: var(--salt-color-gray-40);",
        "--salt-palette-interact-background: rgb(255, 255, 255);",
        "--salt-palette-interact-background-hover: rgb(249, 224, 247);",
        "--salt-palette-interact-background-active: rgb(243, 189, 238);",
        "--salt-palette-info-foreground: rgb(103, 46, 122);",
        "--salt-palette-info-border: var(--salt-color-purple-700);",
      ]);
    });

    test("converts text sample token", () => {
      expect(convertThemeObjToCss(TextSampleTokens)).toEqual([
        "--salt-text-fontSize: 12px;",
        '--salt-typography-fontFamily: "Open Sans";',
      ]);
    });
  });

  describe("Unknown token type", () => {
    test("supports value reference", () => {
      expect(
        convertThemeObjToCss({
          token: {
            $type: "unknown",
            // Orange 800
            $value: "{a.b.c}",
          },
        })
      ).toEqual(["--token: var(--a-b-c);"]);
    });

    test("supports string value", () => {
      expect(
        convertThemeObjToCss({
          token: {
            $type: "unknown",
            // Orange 800
            $value: "value",
          },
        })
      ).toEqual(["--token: value;"]);
    });

    test("supports number value", () => {
      expect(
        convertThemeObjToCss({
          token: {
            $type: "unknown",
            // Orange 800
            $value: 12,
          },
        })
      ).toEqual(["--token: 12;"]);
    });
  });
});
