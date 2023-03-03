import {
  ColorToken,
  ColorTokenValue,
  ReferenceValue,
  TOKEN_TYPES,
} from "./types";

export const splitObjectKeysByDollar = (input: { [key: string]: any }) => {
  const with$: { [key: string]: any } = {};
  const others: { [key: string]: any } = {};
  Object.keys(input).forEach((key) => {
    if (key.startsWith("$")) {
      with$[key] = input[key];
    } else {
      others[key] = input[key];
    }
  });
  return [with$, others] as const;
};

const innerCssConvertLoop = (themeObj: any): string[] => {
  if (typeof themeObj === "object") {
    const allKeys = Object.keys(themeObj);

    return allKeys.flatMap((k) => {
      const objValue = themeObj[k];

      if (isThemeToken(objValue, true)) {
        const [with$, others] = splitObjectKeysByDollar(objValue);
        const { $type, $value, ...rest$ } = with$;

        const allCss: string[] = [];
        if ($type === "color") {
          allCss.push(
            k + ": " + convertColorTokenToCSS({ $type, $value, ...rest$ })
          );
        } else {
          if (isTokenValueReference($value)) {
            allCss.push(k + ": " + convertValueReferenceToCSSValue($value));
          } else {
            try {
              allCss.push(k + ": " + $value.toString());
            } catch (e) {
              console.error(
                "Unimplemented CSS conversion for type: " + $type,
                +", value: ",
                $value
              );
            }
          }
        }

        const restCss = innerCssConvertLoop(others).map(
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

export const isThemeToken = (
  obj: any,
  loose?: boolean,
  debug?: boolean
): obj is ThemeToken => {
  debug && console.log("isThemeToken", obj);
  if (typeof obj === "object") {
    const $type = obj.$type;
    if ($type) {
      const $value = obj.$value;
      if ($value) {
        switch ($type) {
          case "color": {
            return isValidColorTokenValue($value, debug);
          }
          default: {
            if (loose) {
              return true;
            } else {
              debug &&
                console.warn(
                  `Not implemented validation token type "${$type}""`
                );
              return false;
            }
          }
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

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: any) {
  return item && typeof item === "object" && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target: any, ...sources: any): any {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}
