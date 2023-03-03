import { FormField, Input, Color, ColorChooser } from "@salt-ds/lab";
import { useCallback } from "react";
import { ColorToken } from "../../../themes/types";
import {
  isTokenValueReference,
  getValueReferenceInner,
  makeValueReference,
} from "../../../themes/utils";

export const ColorTokenRenderer = ({
  color: colorProp,
  onColorChange,
}: {
  color: ColorToken["$value"];
  onColorChange?: (newColor: ColorToken["$value"]) => void;
}) => {
  if (isTokenValueReference(colorProp)) {
    const referencePointer = getValueReferenceInner(colorProp);
    return (
      <FormField label="Reference" fullWidth={false} style={{ width: 160 }}>
        <Input
          value={referencePointer}
          onChange={(_, newValue) =>
            onColorChange?.(makeValueReference(newValue))
          }
        />
      </FormField>
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
      <ColorChooser color={color} onSelect={onSelect} onClear={() => {}} />
    );
  }
};
