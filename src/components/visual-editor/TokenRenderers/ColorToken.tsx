import { Color, ColorChooser } from "@salt-ds/lab";
import { useCallback } from "react";
import { ColorToken } from "../../../themes/token-types";
import { isTokenValueReference } from "../../../themes/token-types";
import { ReferenceValueRenderer } from "./GenericToken";

export const ColorTokenRenderer = ({
  color: colorProp,
  onColorChange,
}: {
  color: ColorToken["$value"];
  onColorChange?: (newColor: ColorToken["$value"]) => void;
}) => {
  if (isTokenValueReference(colorProp)) {
    return (
      <ReferenceValueRenderer value={colorProp} onValueChange={onColorChange} />
    );
  } else {
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
    return (
      <div>
        <ColorChooser color={color} onSelect={onSelect} onClear={() => {}} />
      </div>
    );
  }
};
