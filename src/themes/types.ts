import { ColorToken } from "./token-types/color-token";
import { GenericToken, TokenPropertyKey } from "./token-types/shared";

export type ThemeToken = ColorToken | GenericToken;

export type ThemeObject =
  | ThemeToken
  // 2nd half ensures `key` can't be `$value` and `$type` to help TS
  | ({
      [key: string]: ThemeObject;
    } & {
      $value?: never;
      $type?: never;
    });

export type ThemeRoot = {
  // Top level theme object should have token name present
  [key: string]: typeof key extends TokenPropertyKey
    ? number | string // Could be useful for $version, $description
    : ThemeObject;
} & {
  $value?: never;
};
