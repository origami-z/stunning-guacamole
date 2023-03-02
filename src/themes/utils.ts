import {
  ColorToken,
  ColorTokenValue,
  ReferenceValue,
  TOKEN_TYPES,
} from "./types";

const innerCssConvertLoop = (themeObj: any): string[] => {
  if (typeof themeObj === "object") {
    const allKeys = Object.keys(themeObj);

    return allKeys.flatMap((k) => {
      const objValue = themeObj[k];

      if (isThemeToken(objValue)) {
        // TODO: filter keys based on prefix `$`
        const { $type, $value, ...restObj } = objValue;

        const allCss: string[] = [];
        if ($type === "color") {
          allCss.push(k + ": " + convertColorTokenToCSS({ $type, $value }));
        } else {
          console.warn("Unimplemented CSS conversion for type: " + $type);
        }

        const restCss = innerCssConvertLoop(restObj).map(
          (mappedCode) => `${k}-${mappedCode}`
        );
        allCss.push(...restCss);

        return allCss;
      } else if (typeof objValue === "object") {
        const mapped = innerCssConvertLoop(objValue).map(
          (converted) => k + "-" + converted
        );

        return mapped;
      } else {
        return "";
      }
    });
  } else {
    return [];
  }
};

export const convertThemeObjToCss = (themeObj: any): string[] => {
  return innerCssConvertLoop(themeObj).map((css) => "--" + css + ";");
};

export const isTokenValueReference = (value: any): value is ReferenceValue => {
  if (typeof value === "string") {
    if (value.startsWith("{") && value.endsWith("}")) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

/**
 * Extract string part of the value reference.
 *
 * `{abc.def}`
 * =>
 * `abc.def`
 */
export const getValueReferenceInner = (value: ReferenceValue): string =>
  value.substring(1, value.length - 1);

export const makeValueReference = (innerValue: string): ReferenceValue => {
  return `{${innerValue}}`;
};

export const convertValueReferenceToCSSValue = (
  value: ReferenceValue
): string => {
  const referencePointers = getValueReferenceInner(value).split(".");
  return `var(--${referencePointers.join("-")})`;
};

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

export type ThemeToken = ColorToken;

export const isThemeToken = (obj: any, debug?: boolean): obj is ThemeToken => {
  debug && console.log("isThemeToken", obj);
  if (typeof obj === "object") {
    const $type = obj.$type;
    if ($type) {
      const $value = obj.$value;
      if ($value) {
        if (TOKEN_TYPES.includes($type)) {
          switch ($type) {
            case "color": {
              return isValidColorTokenValue($value, debug);
            }
            default: {
              debug &&
                console.warn(
                  `Not implemented validation token type "${$type}""`
                );
              return false;
            }
          }
        } else {
          debug && console.warn(`Unsupported token type "${$type}""`);
          return false;
        }
      } else {
        debug && console.warn(`No 'value' field`);
        return false;
      }
    } else {
      debug && console.warn(`No 'type' field`);
      return false;
    }
  } else {
    debug && console.warn(`Not an object`);
    return false;
  }
};
