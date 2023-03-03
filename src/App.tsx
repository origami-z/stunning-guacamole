import { Card, FlexItem, FlexLayout, StackLayout } from "@salt-ds/core";
import { useState } from "react";
import { CustomSandpack, DEFAULT_VITE_FILES } from "./components/sandpack";
import { ThemeRenderer } from "./components/visual-editor/ThemeRenderer";
import { DEFAULT_TOKENS } from "./themes/sample-tokens/default";
import MonacoEditor from "@monaco-editor/react";
import { SandpackProvider } from "@codesandbox/sandpack-react";
import { TemplatePicker } from "./components/visual-editor/TemplatePicker";
import { ToggleButton } from "@salt-ds/lab";

import "./App.css";
import { DocumentIcon } from "@salt-ds/icons";

const InnerApp = () => {
  const [themeName, setThemeName] = useState("Custom theme");
  const [customTheme, setCustomTheme] = useState<any>(DEFAULT_TOKENS);
  const [showCodeEditor, setShowCodeEditor] = useState(false);

  return (
    <FlexLayout className="inner-app">
      <FlexItem
        grow={1}
        shrink={1}
        align="stretch"
        className="theme-definition-panel"
      >
        <StackLayout style={{ height: "100%" }}>
          <TemplatePicker
            onThemeObjChange={(newTheme, newName) => {
              setCustomTheme(newTheme);
              setThemeName(newName);
            }}
          />
          <Card
            className={
              "theme-renderer-card" +
              (showCodeEditor ? " code-editor-card" : "")
            }
          >
            <ToggleButton
              variant="cta"
              className="show-code-editor-toggle"
              toggled={showCodeEditor}
              onToggle={(_, newValue) => setShowCodeEditor(newValue)}
              tooltipText="Use editor to change value type if needed"
            >
              <DocumentIcon /> JSON
            </ToggleButton>
            {showCodeEditor ? (
              <MonacoEditor
                width="100%"
                height="100%"
                language="json"
                theme="vs-light"
                key={themeName}
                defaultValue={JSON.stringify(customTheme, null, 2)}
                onChange={(value) => {
                  try {
                    setCustomTheme(JSON.parse(value || ""));
                  } catch {
                    console.log("Invalid JSON, ignore updating theme");
                  }
                }}
              />
            ) : (
              <ThemeRenderer
                name={themeName}
                themeObj={customTheme}
                onThemeObjChange={(newTheme) => setCustomTheme(newTheme)}
              />
            )}
          </Card>
        </StackLayout>
      </FlexItem>
      <FlexItem grow={2} shrink={1} className="sandpack-preview-panel">
        <CustomSandpack themeObj={customTheme} />
      </FlexItem>
    </FlexLayout>
  );
};

const App = () => {
  return (
    <SandpackProvider
      theme="light"
      customSetup={{
        entry: "/App.tsx",
        environment: "node",
      }}
      files={DEFAULT_VITE_FILES}
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
