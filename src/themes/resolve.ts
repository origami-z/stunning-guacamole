import {
  getValueReferenceInner,
  isTokenValueReference,
  ReferenceValue,
} from "./token-types";
import { ThemeObject, TokenType } from "./types";

const ITERATION_THRESHOLD = 10;

export function getTokenFromObj(
  obj: ThemeObject,
  keys: string[]
): TokenType | undefined {
  // Do not update passed in param, keep the function pure
  let keysCopy = [...keys];
  if (typeof obj === "object") {
    if (keysCopy.length) {
      const firstKey = keysCopy.shift();
      if (firstKey) return getTokenFromObj((obj as any)[firstKey], keysCopy);
      else return undefined;
    } else {
      if (obj.$type) {
        return obj;
      } else {
        return undefined;
      }
    }
  } else {
    return undefined;
  }
}

export const resolveToken = (
  reference: ReferenceValue,
  theme: ThemeObject
): null | TokenType => {
  // console.log("resolveToken", reference);
  let iterationCount = 0;
  let referencePointer = "";
  //   let description = "";
  let value: string | number = reference;
  let token: TokenType | null = null;

  while (
    isTokenValueReference(value) &&
    iterationCount <= ITERATION_THRESHOLD
  ) {
    // get the real value from inputJson
    referencePointer = getValueReferenceInner(value);
    const keys = referencePointer.split(".");
    token = getTokenFromObj(theme, keys) || null;

    if (token) {
      value = token.$value;
      if (isTokenValueReference(token.$value)) {
        // Next loop
      } else {
        // Found resolved value
        break;
      }
    } else {
      console.error("getValueFromObj resolved nothing", keys);
      break;
    }

    iterationCount++;
  }

  // console.log(referencePointer, value);
  if (iterationCount === ITERATION_THRESHOLD) {
    console.error(`Cannot find value with {${referencePointer}}`);
    return null;
  }

  if (isTokenValueReference(value)) {
    console.error(
      `Cannot resolve token from ${value}, potentially infinite reference loop`
    );
    return null;
  }

  return token;
};
