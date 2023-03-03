import { FormField, Input, Color, ColorChooser } from "@salt-ds/lab";
import { useCallback } from "react";
import { ColorToken } from "../../../themes/types";
import {
  isTokenValueReference,
  getValueReferenceInner,
  makeValueReference,
} from "../../../themes/utils";

export const GenericTokenRenderer = <T extends any>({
  value,
  onValueChange,
}: {
  value: T;
  onValueChange?: (newValue: T) => void;
}) => {
  if (isTokenValueReference(value)) {
    const referencePointer = getValueReferenceInner(value);
    return (
      <FormField label="Reference" style={{ width: 160 }}>
        <Input
          value={referencePointer}
          onChange={(_, newValue) =>
            onValueChange?.(makeValueReference(newValue) as T)
          }
        />
      </FormField>
    );
  } else if (typeof value === "string") {
    return (
      <FormField label="Value" style={{ width: 160 }}>
        <Input
          value={value}
          onChange={(_, newValue) => onValueChange?.(newValue as T)}
        />
      </FormField>
    );
  } else if (typeof value === "number") {
    return (
      <FormField label="Value" style={{ width: 160 }}>
        <Input
          value={value as any}
          type="number"
          onChange={(_, newValue) =>
            onValueChange?.(Number.parseFloat(newValue) as T)
          }
        />
      </FormField>
    );
  } else {
    const stringifyValue = JSON.stringify(value);
    return (
      <FormField label="JSON value" style={{ width: 160 }}>
        <Input
          value={stringifyValue}
          onChange={(_, newValue) => {
            try {
              onValueChange?.(JSON.parse(newValue) as T);
            } catch {
              console.warn("Ignored update from invalid JSON value", newValue);
            }
          }}
        />
      </FormField>
    );
  }
};
