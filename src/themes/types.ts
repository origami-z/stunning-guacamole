export const TOKEN_TYPES = ["color"] as const;

export type ColorToken = {
  type: "color";
  value: {
    r: number;
    g: number;
    b: number;
    a?: number;
  };
};
