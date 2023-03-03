import { FormField, Input } from "@salt-ds/lab";
import { ReferenceValue } from "../../../themes/types";
import {
  getValueReferenceInner,
  isTokenValueReference,
  makeValueReference,
} from "../../../themes/utils";

export const ReferenceValueRenderer = ({
  value,
  onValueChange,
}: {
  value: ReferenceValue;
  onValueChange?: (newValue: ReferenceValue) => void;
}) => {
  const referencePointer = getValueReferenceInner(value);
  return (
    <FormField label="Reference" style={{ width: 160 }}>
      <Input
        value={referencePointer}
        onChange={(_, newValue) =>
          onValueChange?.(makeValueReference(newValue))
        }
        startAdornment="{"
        endAdornment="}"
      />
    </FormField>
  );
};

export const GenericTokenRenderer = <T extends any>({
  value,
  onValueChange,
}: {
  value: T;
  onValueChange?: (newValue: T) => void;
}) => {
  if (isTokenValueReference(value)) {
    return (
      <ReferenceValueRenderer
        value={value}
        onValueChange={onValueChange as any}
      />
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
