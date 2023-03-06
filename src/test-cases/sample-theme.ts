import { ColorToken } from "../themes/token-types";
import { ThemeObject } from "../themes/types";

export const sampleValidColors = {
  color: {
    transparent: {
      $value: "transparent",
      $type: "color",
    },
    red: {
      "10": {
        $value: {
          r: 255,
          g: 227,
          b: 224,
        },
        $type: "color",
      },
    },
  },
  nestedRefRed10: {
    $value: "{color.red.10}",
    $type: "color",
  },
  selfReferencing: {
    $value: "{selfReferencing}",
    $type: "color",
  },
  reference: {
    $value: "{color.abc}",
    $type: "color",
  },
  baseAndOpacity: {
    $value: {
      base: "#f1f1f1",
      opacity: 1,
    },
    $type: "color",
  },
  baseIsReference: {
    $value: {
      base: "{color.red.10}",
      opacity: 1,
    },
    $type: "color",
  },
  opacityIsReference: {
    $value: {
      base: "#f1f1f1",
      opacity: "{color.abc}",
    },
    $type: "color",
  },
} satisfies ThemeObject<ColorToken>;
