import { H1, StackLayout } from "@salt-ds/core";
import { Fragment } from "react";
import { splitObjectKeysByDollar } from "../../themes/utils";
import { ColorTokenRenderer } from "./TokenRenderers/ColorToken";
import { GenericTokenRenderer } from "./TokenRenderers/GenericToken";

const ThemeTokens = ({
  themeObj,
  onThemeObjChange,
  level,
}: {
  themeObj: any;
  onThemeObjChange?: (newThemeObj: any) => void;
  level?: number;
}) => {
  const [with$, others] = splitObjectKeysByDollar(themeObj);
  const { $type, $value, ...rest$ } = with$;
  // if (isThemeToken(themeObj)) {
  if ($type && $value) {
    const { $type, $value, ...restToken } = themeObj;

    let tokenRenderer;

    if ($type === "color") {
      tokenRenderer = (
        <ColorTokenRenderer
          color={$value}
          onColorChange={(newColor) => {
            return onThemeObjChange?.({
              $type,
              $value: newColor,
              ...restToken,
            });
          }}
        />
      );
    } else {
      // console.warn("Unimplemented renderer for token", themeObj);
      tokenRenderer = (
        <GenericTokenRenderer
          value={$value}
          onValueChange={(newValue) => {
            return onThemeObjChange?.({
              $type,
              $value: newValue,
              ...restToken,
            });
          }}
        />
      );
    }

    return (
      <StackLayout gap={1}>
        {tokenRenderer}
        <ThemeTokens
          themeObj={restToken}
          onThemeObjChange={(newToken) => {
            onThemeObjChange?.({ $type, $value, ...newToken });
          }}
        />
      </StackLayout>
    );
  } else if (typeof themeObj === "object") {
    const Element: any = level
      ? level < 5
        ? "h" + level
        : "strong"
      : "strong";
    const allKeys = Object.keys(themeObj);
    return (
      <div>
        {allKeys.map((k) => {
          return (
            <Fragment key={k}>
              <Element>{k}</Element>
              <ThemeTokens
                themeObj={themeObj[k]}
                onThemeObjChange={(newObj) => {
                  const updatedObj = { ...themeObj, [k]: newObj };
                  onThemeObjChange?.(updatedObj);
                }}
                level={level ? level + 1 : 2}
              />
            </Fragment>
          );
        })}
      </div>
    );
  }

  return null;
};

/**
 * Very naive implementation meant for demo purposes, displaying all tokens in a long list
 * and doesn't support switch token value type if needed.
 */
export const ThemeRenderer = ({
  name = "Custom theme",
  themeObj,
  onThemeObjChange,
}: {
  name?: string;
  themeObj: any;
  onThemeObjChange?: (newThemeObj: any) => void;
}) => {
  return (
    <>
      <H1>{name}</H1>
      <div>
        <ThemeTokens
          themeObj={themeObj}
          onThemeObjChange={onThemeObjChange}
          level={2}
        />
      </div>
    </>
  );
};
