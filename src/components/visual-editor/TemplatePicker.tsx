import { useSandpack } from "@codesandbox/sandpack-react";
import { Card, FlexLayout } from "@salt-ds/core";
import { Dropdown, FormField } from "@salt-ds/lab";
import { DEFAULT_TOKENS } from "../../themes/sample-tokens/default";
import { SampleToken1 } from "../../themes/sample-tokens/sample1";
import {
  APP_TEMPLATE_1,
  APP_TEMPLATE_2,
  APP_TEMPLATE_F,
} from "../sandpack/code-templates";

const ThemeTemplate = [
  {
    name: "Sample 0",
    theme: DEFAULT_TOKENS,
  },
  {
    name: "Sample 1",
    theme: SampleToken1,
  },
];

const AppCodeTemplate = [
  {
    name: "Product home page",
    template: APP_TEMPLATE_F,
  },
  {
    name: "List with buttons",
    template: APP_TEMPLATE_1,
  },
  {
    name: "Toolbar with grid",
    template: APP_TEMPLATE_2,
  },
];

export const TemplatePicker = ({
  onThemeObjChange,
}: {
  onThemeObjChange?: (newThemeObj: any, name: string) => void;
}) => {
  const { sandpack } = useSandpack();

  return (
    <Card className="template-picker-card">
      <FlexLayout justify="space-between">
        <FormField label="Themes template" style={{ width: 200 }}>
          <Dropdown
            selected={null}
            source={ThemeTemplate}
            itemToString={(item) => (item ? item.name : "")}
            onSelectionChange={(_, item) =>
              item && onThemeObjChange?.(item.theme, item.name)
            }
          />
        </FormField>

        <FormField label="App Preview template" style={{ width: 200 }}>
          <Dropdown
            selected={null}
            source={AppCodeTemplate}
            itemToString={(item) => (item ? item.name : "")}
            onSelectionChange={(_, item) => {
              if (item) {
                Object.entries(item.template).forEach(([file, code]) => {
                  sandpack.updateFile(file, code, true);
                });
              }
            }}
          />
        </FormField>
      </FlexLayout>
    </Card>
  );
};
