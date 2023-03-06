import {
  convertColorTokenToCSS,
  isValidColorTokenValue,
} from "./token-types/color-token";
import {
  convertValueReferenceToCSSValue,
  isTokenValueReference,
} from "./token-types/shared";
import { TokenType } from "./types";

/**
 * Split an object to two with one keys all prefixed with $.
 *
 * `[{$type, ...rest$}, {otherGroup, ...restGroups}] = splitObjectKeysByDollar({$type: 'color', otherGroup: {}})`
 */
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

export const convertThemeObjToCss = (themeObj: any): string[] => {
  const innerLoop = (themeObj: any): string[] => {
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
              if (typeof $value === "object") {
                Object.keys($value).forEach((valueKey) => {
                  const valueValue = $value[valueKey];
                  if (typeof valueValue === "object") {
                    console.error(
                      "Nested object value is not allowed: ",
                      valueValue
                    );
                  } else if (isTokenValueReference(valueValue)) {
                    allCss.push(
                      `${k}-${valueKey}: ${convertValueReferenceToCSSValue(
                        valueValue
                      )}`
                    );
                  } else {
                    // Try converting all other types of value using `toString`, or ignore
                    try {
                      allCss.push(`${k}-${valueKey}: ${valueValue.toString()}`);
                    } catch (e) {
                      console.error(
                        "Unimplemented CSS conversion for nested value in type: " +
                          $type,
                        +", nested value: ",
                        valueValue
                      );
                    }
                  }
                });
              } else {
                // Try converting all other types of value using `toString`, or ignore
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
          }

          const restCss = innerLoop(others).map(
            (mappedCode) => `${k}-${mappedCode}`
          );
          allCss.push(...restCss);

          return allCss;
        } else if (typeof objValue === "object") {
          const mapped = innerLoop(objValue).map(
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
  return innerLoop(themeObj).map((css) => "--" + css + ";");
};

export const isThemeToken = (
  obj: any,
  loose?: boolean,
  debug?: boolean
): obj is TokenType => {
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
