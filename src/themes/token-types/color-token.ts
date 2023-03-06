import {
  convertValueReferenceToCSSValue,
  isTokenValueReference,
  isTokenValueReferenceOrNumber,
  ReferenceValue,
  TokenProperties,
} from "./shared";

export type RGB255 = {
  r: number;
  g: number;
  b: number;
};

export type RGBA255 = RGB255 & {
  a?: number;
};

export type BaseOpacityValue = {
  base: ReferenceValue | string | RGBA255;
  opacity?: ReferenceValue | number;
};

export type ColorTokenValue =
  | RGBA255
  | ReferenceValue
  | string
  | BaseOpacityValue;

export type ColorToken = {
  $type: "color";
  $value: ColorTokenValue;
} & TokenProperties;

export const isRGBA255 = (value: any): value is RGBA255 => {
  if (typeof value === "object") {
    if (
      typeof value.r === "number" &&
      typeof value.g === "number" &&
      typeof value.b === "number"
    ) {
      if (typeof value.a === "number" || typeof value.a === "undefined") {
        return true;
      }
    }
  }

  return false;
};

export const isBaseOpacityValue = (value: any): value is BaseOpacityValue => {
  if (typeof value === "object") {
    const { base, opacity } = value;
    if (base !== undefined) {
      if (typeof base === "string") {
        if (opacity !== undefined) {
          return isTokenValueReferenceOrNumber(opacity);
        } else {
          // No opacity
          return true;
        }
      } else if (isRGBA255(base)) {
        if (opacity !== undefined) {
          return isTokenValueReferenceOrNumber(opacity);
        } else {
          // No opacity
          return true;
        }
      }
    }
  }

  return false;
};

const rgbaValueToString = ($value: RGBA255) => {
  const { r, g, b, a } = $value;
  if (a) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};

export const convertColorTokenToCSS = (token: ColorToken): string => {
  const $value = token["$value"];
  if (isTokenValueReference($value)) {
    return convertValueReferenceToCSSValue($value);
  } else if (typeof $value === "string") {
    // Raw color values like #123123, white, transparent
    return $value;
  } else if (typeof $value === "object") {
    if (isRGBA255($value)) {
      return rgbaValueToString($value);
    } else if (isBaseOpacityValue($value)) {
      const { base, opacity } = $value;
      if (isRGBA255(base)) {
        if (opacity !== undefined) {
          const { r, g, b } = base;
          return `rgba(${r}, ${g}, ${b}, ${opacity})`;
        } else {
          return rgbaValueToString(base);
        }
      } else {
        if (opacity !== undefined) {
          // TODO: when both of base and opacity is reference, the only sensible solution is to resolve them to expanded RGBA value
          throw new Error(
            "Convert base opacity references to css is not implemented"
          );
        } else {
          // TODO: test this
          return convertColorTokenToCSS({ $type: token.$type, $value: base });
        }
      }
    }
  }

  return token.$value.toString();
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
