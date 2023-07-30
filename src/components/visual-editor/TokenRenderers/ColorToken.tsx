import { Color, ColorChooser, FormField, Input } from "@salt-ds/lab";
import { useCallback } from "react";
import { ColorToken, isRGBA255 } from "../../../themes/token-types";
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
  } else if (typeof colorProp === "string") {
    return (
      <FormField label="Value" style={{ width: 160 }}>
        <Input
          value={colorProp}
          onChange={(_, newValue) => onColorChange?.(newValue)}
        />
      </FormField>
    );
  } else if (isRGBA255(colorProp)) {
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
        <ColorChooser
          color={color}
          onSelect={onSelect}
          onClear={() => {}}
          buttonProps={{ variant: "secondary" }}
        />
      </div>
    );
  } else {
    const stringifyValue = JSON.stringify(colorProp);
    return (
      <FormField label="JSON value" style={{ width: 160 }}>
        <Input
          value={stringifyValue}
          onChange={(_, newValue) => {
            try {
              onColorChange?.(JSON.parse(newValue));
            } catch {
              console.warn("Ignored update from invalid JSON value", newValue);
            }
          }}
        />
      </FormField>
    );
  }
};
