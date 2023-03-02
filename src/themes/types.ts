type ReferenceValuePointer = string;
export type ReferenceValue = `{${ReferenceValuePointer}}`;

export const TOKEN_TYPES = ["color"] as const;

export type ColorTokenValue = {
  r: number;
  g: number;
  b: number;
  a?: number;
};
// | ReferenceValue;

export type ColorToken = {
  $type: "color";
  $value: ColorTokenValue;
};
