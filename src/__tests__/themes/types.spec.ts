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
