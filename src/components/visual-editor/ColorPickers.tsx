import { Color, ColorChooser } from "@salt-ds/lab";
import { useCallback, Fragment } from "react";
import { ColorToken } from "../../themes/types";
import { isThemeToken } from "../../themes/utils";

const IndividualPicker = ({
  color: colorProp,
  onColorChange,
}: {
  color: ColorToken["value"];
  onColorChange?: (newColor: ColorToken["value"]) => void;
}) => {
  const { r, g, b, a } = colorProp;
  const color = Color.makeColorFromRGB(r, g, b, a);

  const onSelect = useCallback(
    (color?: Color) => {
      if (color) {
        const rgba = color.rgba;
        if (rgba.a === 1) {
          onColorChange?.({ r: rgba.r, g: rgba.g, b: rgba.b });
        } else {
          onColorChange?.(rgba);
        }
      }
    },
    [onColorChange]
  );
  return <ColorChooser color={color} onSelect={onSelect} onClear={() => {}} />;
};

const ThemeTokens = ({
  themeObj,
  onThemeObjChange,
  level,
}: {
  themeObj: any;
  onThemeObjChange?: (newThemeObj: any) => void;
  level?: number;
}) => {
  if (isThemeToken(themeObj)) {
    const { type, value, ...restToken } = themeObj;

    let tokenRenderer;

    if (type === "color") {
      tokenRenderer = (
        <div>
          <IndividualPicker
            color={value}
            onColorChange={(newColor) => {
              return onThemeObjChange?.({
                type,
                value: newColor,
                ...restToken,
              });
            }}
          />
        </div>
      );
    } else {
      console.warn("Unimplemented renderer for token", themeObj);
      tokenRenderer = null;
    }

    return (
      <>
        {tokenRenderer}
        <ThemeTokens
          themeObj={restToken}
          onThemeObjChange={(newToken) => {
            onThemeObjChange?.({ type, value, ...newToken });
          }}
        />
      </>
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

export const ColorPickers = ({
  themeObj,
  onThemeObjChange,
}: {
  themeObj: any;
  onThemeObjChange?: (newThemeObj: any) => void;
}) => {
  return (
    <>
      <h1>Custom Theme</h1>
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
