import {
  convertValueReferenceToCSSValue,
  isTokenValueReference,
  ReferenceValue,
  TokenProperties,
} from "./shared";

export type ColorTokenValue =
  | {
      r: number;
      g: number;
      b: number;
      a?: number;
    }
  | ReferenceValue;

export type ColorToken =
  | {
      $type: "color";
      $value: ColorTokenValue;
    }
  | TokenProperties;

export const convertColorTokenToCSS = (token: ColorToken): string => {
  const $value = token["$value"];
  if (isTokenValueReference($value)) {
    return convertValueReferenceToCSSValue($value);
  } else {
    const { r, g, b, a } = $value;
    if (a) {
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    } else {
      return `rgb(${r}, ${g}, ${b})`;
    }
  }
};

export const isValidColorTokenValue = (
  value: any,
  debug?: boolean
): value is ColorTokenValue => {
  if (typeof value === "string") {
    if (isTokenValueReference(value)) {
      return true;
    } else {
      debug &&
        console.warn(
          `value of "color" token needs to have r/g/b number values or a reference: ${value}`
        );
      return false;
    }
  } else if (typeof value === "object") {
    if (
      typeof value.r === "number" &&
      typeof value.g === "number" &&
      typeof value.b === "number"
    ) {
      return true;
    } else {
      debug &&
        console.warn(
          `value of "color" token needs to have r/g/b number values or a reference: ${value}`
        );
      return false;
    }
  } else {
    debug && console.warn(`value of "color" token is not "object": ${value}`);
    return false;
  }
};
