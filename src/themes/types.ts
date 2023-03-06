import { ColorToken } from "./token-types/color-token";
import {
  GenericToken,
  TokenPropertyKey,
  TokenReservedKey,
} from "./token-types/shared";

export type TokenType = ColorToken | GenericToken;

export type ThemeObject<TType = TokenType> =
  | TType
  | {
      [key: string]: typeof key extends TokenReservedKey
        ? never
        : ThemeObject<TType>;
    };

export type ThemeRoot = {
  // Top level theme object should have token name present
  [key: string]: typeof key extends TokenPropertyKey
    ? number | string // Could be useful for $version, $description
    : ThemeObject;
} & {
  $value?: never;
};
