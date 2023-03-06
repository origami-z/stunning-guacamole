type TokenPropertyName = string;
export type TokenPropertyKey = `$${TokenPropertyName}`;
export type TokenReservedKey = "$value" | "$type";

/**
 * Additional information associated with a token, e.g. $description.
 * $value and $type are excluded.
 **/
export type TokenProperties = {
  [key: TokenPropertyKey]: typeof key extends TokenPropertyKey
    ? typeof key extends TokenReservedKey
      ? never
      : any
    : never;
};

export type GenericToken =
  | {
      $type: string;
      $value: any;
    }
  | TokenProperties;

type ReferenceValuePointer = string;
export type ReferenceValue = `{${ReferenceValuePointer}}`;

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

export const isTokenValueReferenceOrNumber = (
  value: any
): value is ReferenceValue | number => {
  if (typeof value === "number") {
    return true;
  }
  return isTokenValueReference(value);
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
