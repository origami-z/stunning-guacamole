import { Color, ColorChooser } from "@salt-ds/lab";
import { useCallback } from "react";

const IndividualPicker = ({
  hex,
  onHexChange,
}: {
  hex: string;
  onHexChange?: (newHex: string) => void;
}) => {
  const color = Color.makeColorFromHex(hex);

  const onSelect = useCallback(
    (color?: Color) => {
      if (color) {
        onHexChange?.(color.hex);
      }
    },
    [onHexChange]
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
  if (typeof themeObj === "string") {
    return (
      <div>
        <IndividualPicker
          hex={themeObj}
          onHexChange={(newHex) => onThemeObjChange?.(newHex)}
        />
      </div>
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
            <>
              <Element>{k}</Element>
              <ThemeTokens
                themeObj={themeObj[k]}
                onThemeObjChange={(newObj) => {
                  const updatedObj = { ...themeObj, [k]: newObj };
                  onThemeObjChange?.(updatedObj);
                }}
                level={level ? level + 1 : 2}
              />
            </>
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
  console.log("ColorPickers", { themeObj });
  return (
    <>
      {/* <div>Choose colors</div> */}
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
