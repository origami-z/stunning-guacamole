import { Card, FlexItem, FlexLayout, StackLayout } from "@salt-ds/core";
import { useState } from "react";
import {
  CustomSandpack,
  DEFAULT_FILES,
  dependencies,
} from "./components/sandpack";
import { ThemeRenderer } from "./components/visual-editor/ThemeRenderer";
import { DEFAULT_TOKENS } from "./themes/sample-tokens/default";

import { SandpackProvider } from "@codesandbox/sandpack-react";
import { TemplatePicker } from "./components/visual-editor/TemplatePicker";

import "./App.css";

const InnerApp = () => {
  const [themeName, setThemeName] = useState("Custom theme");
  const [customTheme, setCustomTheme] = useState<any>(DEFAULT_TOKENS);
  console.log("InnerApp", customTheme);

  return (
    <FlexLayout className="inner-app">
      <FlexItem grow={1} shrink={1} align="stretch">
        <StackLayout style={{ height: "100%" }}>
          <TemplatePicker
            onThemeObjChange={(newTheme, newName) => {
              setCustomTheme(newTheme);
              setThemeName(newName);
            }}
          />
          <Card className="theme-renderer-card">
            <ThemeRenderer
              name={themeName}
              themeObj={customTheme}
              onThemeObjChange={(newTheme) => setCustomTheme(newTheme)}
            />
          </Card>
        </StackLayout>
      </FlexItem>
      <FlexItem grow={1} shrink={1}>
        <CustomSandpack themeObj={customTheme} />
      </FlexItem>
    </FlexLayout>
  );
};

const App = () => {
  return (
    <SandpackProvider
      template="react-ts"
      theme="light"
      customSetup={{
        dependencies,
      }}
      files={DEFAULT_FILES}
      options={{
        classes: {
          "sp-wrapper": "custom-wrapper",
          "sp-layout": "custom-layout",
          "sp-tab-button": "custom-tab",
        },
        // Custom bundler URL: https://sandpack.codesandbox.io/docs/guides/hosting-the-bundler
        // bundlerURL: ''
      }}
    >
      <InnerApp />
    </SandpackProvider>
  );
};
export default App;
