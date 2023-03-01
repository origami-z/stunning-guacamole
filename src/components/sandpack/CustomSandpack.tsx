import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { Button, StackLayout } from "@salt-ds/core";
import { useState } from "react";
import { convertThemeObjToCss } from "../../themes/utils";
import { DEFAULT_FILES, dependencies } from "./custom-setup";

const MutableKeyMap = completionKeymap.slice();

const CustomLayout = () => {
  const [showEditor, setShowEditor] = useState(false);
  return (
    <StackLayout>
      <SandpackLayout>
        {showEditor && (
          <SandpackCodeEditor
            closableTabs
            showLineNumbers
            extensions={[autocompletion()]}
            extensionsKeymap={MutableKeyMap}
          />
        )}
        <SandpackPreview />
      </SandpackLayout>

      <div>
        <Button onClick={() => setShowEditor((x) => !x)}>
          {showEditor ? "Hide " : "Show "}Editor
        </Button>
      </div>
    </StackLayout>
  );
};

export const CustomSandpack = ({ themeObj }: any) => {
  const defaultFiles = DEFAULT_FILES;
  const convertedCode = convertThemeObjToCss(themeObj).map(
    (x) => `--salt-palette-${x};`
  );
  const code = `.custom-theme.salt-theme {
  ${convertedCode.join("\n  ")}
}`;
  const files = {
    ...defaultFiles,
    "/Theme.css": {
      code,
    },
    "/theme.json": {
      code: JSON.stringify(themeObj, null, 2),
      readOnly: true,
    },
  };

  return (
    <SandpackProvider
      template="react-ts"
      theme="light"
      customSetup={{
        dependencies,
      }}
      files={files}
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
      <CustomLayout />
    </SandpackProvider>
  );
};
