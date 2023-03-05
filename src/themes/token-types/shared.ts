type TokenPropertyName = string;
export type TokenPropertyKey = `$${TokenPropertyName}`;

/** Information associated with a token, e.g. $type, $value */
export type TokenProperties = {
  [key: TokenPropertyKey]: any;
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
