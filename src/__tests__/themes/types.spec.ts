import { TokenProperties } from "../../themes/token-types/shared";
import { ColorToken } from "../../themes/token-types/color-token";
import { ThemeRoot } from "../../themes/types";

describe("ThemeRoot", () => {
  test("with token is valid", () => {
    ({
      token: {
        $type: "color",
        $value: "{ref.value}",
      },
    } satisfies ThemeRoot);
  });
  test("can't be token alone", () => {
    ({
      // @ts-expect-error
      $type: "color",
      // @ts-expect-error
      $value: "{ref.value}",
    } satisfies ThemeRoot);
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
describe("ColorToken", () => {
  test("can has other token properties like $description", () => {
    ({
      $type: "color",
      $value: "{ref.value}",
      $description: "some description",
    } satisfies ColorToken);
  });
  test("ref value is valid", () => {
    ({
      $type: "color",
      $value: "{ref.value}",
    } satisfies ColorToken);
  });
  test("rgba value is valid", () => {
    ({
      $type: "color",
      $value: {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      },
    } satisfies ColorToken);
  });
});
