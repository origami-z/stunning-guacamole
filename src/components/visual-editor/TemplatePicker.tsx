import { useSandpack } from "@codesandbox/sandpack-react";
import { Button, FlexLayout, SplitLayout, useTheme } from "@salt-ds/core";
import { DarkIcon, LightIcon, ShareIcon } from "@salt-ds/icons";
import { DropdownNext, Option } from "@salt-ds/lab";
import { DEFAULT_TOKENS } from "../../themes/sample-tokens/default";
import { SampleToken1 } from "../../themes/sample-tokens/sample1";
import { shareTheme } from "../../utils";
import {
  APP_TEMPLATE_1,
  APP_TEMPLATE_2,
  APP_TEMPLATE_F,
} from "../sandpack/code-templates";

const THEME_TEMPLATES = [
  {
    name: "Sample 0",
    theme: DEFAULT_TOKENS,
  },
  {
    name: "Sample 1",
    theme: SampleToken1,
  },
] as const;

type AppCodeTemplate = {
  name: string;
  template: {
    [file: string]: string;
  };
};

const APP_CODE_TEMPLATES: AppCodeTemplate[] = [
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
  themeObj,
  onThemeObjChange,
  onToggleAppTheme,
}: {
  themeObj: any;
  onThemeObjChange?: (newThemeObj: any, name: string) => void;
  onToggleAppTheme: () => void;
}) => {
  const { sandpack } = useSandpack();
  const { mode } = useTheme();

  return (
    <SplitLayout
      className="template-picker-toolbar"
      startItem={
        <FlexLayout>
          <DropdownNext
            aria-label="Pick theme template"
            selected={[]}
            onSelectionChange={(_, items) => {
              const item = items[0] as any;
              onThemeObjChange?.(item.theme, item.name);
            }}
            value="Theme template"
            variant="secondary"
            style={{ width: 160, borderBottom: "none" }}
          >
            {THEME_TEMPLATES.map((t) => (
              <Option key={t.name} value={t as any}>
                {t.name}
              </Option>
            ))}
          </DropdownNext>

          <DropdownNext
            aria-label="Pick preview template"
            selected={[]}
            onSelectionChange={(_, items) => {
              if (items.length) {
                const item = items[0] as unknown as AppCodeTemplate;
                Object.entries(item.template).forEach(([file, code]) => {
                  sandpack.updateFile(file, code, true);
                });
              }
            }}
            variant="secondary"
            value="Preview template"
            style={{ width: 160, borderBottom: "none" }}
          >
            {APP_CODE_TEMPLATES.map((t) => (
              <Option key={t.name} value={t as any}>
                {t.name}
              </Option>
            ))}
          </DropdownNext>
        </FlexLayout>
      }
      endItem={
        <FlexLayout gap={1}>
          <Button onClick={() => onToggleAppTheme()} variant="secondary">
            {mode === "dark" ? (
              <DarkIcon aria-label="Dark mode" />
            ) : (
              <LightIcon aria-label="Light mode" />
            )}
          </Button>
          <Button
            onClick={() => shareTheme(themeObj)}
            aria-label="Share theme"
            variant="secondary"
          >
            <ShareIcon />
          </Button>
        </FlexLayout>
      }
    ></SplitLayout>
  );
};
