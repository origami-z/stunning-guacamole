import MonacoEditor from "@monaco-editor/react";
import { Card, StackLayout } from "@salt-ds/core";
import { DocumentIcon } from "@salt-ds/icons";
import { ToggleButton } from "@salt-ds/lab";
import { useState } from "react";
import { TemplatePicker } from "./visual-editor/TemplatePicker";
import { ThemeRenderer } from "./visual-editor/ThemeRenderer";

export const ThemeEditor = ({
  themeObj,
  onThemeObjChange,
}: {
  themeObj: any;
  onThemeObjChange: (newThemeObj: any) => void;
}) => {
  const [themeName, setThemeName] = useState("Custom theme");
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  return (
    <StackLayout style={{ height: "100%" }}>
      <TemplatePicker
        onThemeObjChange={(newTheme, newName) => {
          onThemeObjChange(newTheme);
          setThemeName(newName);
        }}
      />
      <Card
        className={
          "theme-renderer-card" + (showCodeEditor ? " code-editor-card" : "")
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
            // TODO: find a reliable way to update code editor value, when
            // 1. select theme template / update from visual editor would update code
            // 2. code from monaco would only update theme object when being valid
            key={themeName}
            defaultValue={JSON.stringify(themeObj, null, 2)}
            onChange={(value) => {
              try {
                onThemeObjChange(JSON.parse(value || ""));
              } catch {
                console.log("Invalid JSON, ignore updating theme");
              }
            }}
          />
        ) : (
          <ThemeRenderer
            name={themeName}
            themeObj={themeObj}
            onThemeObjChange={(newTheme) => onThemeObjChange(newTheme)}
          />
        )}
      </Card>
    </StackLayout>
  );
};
