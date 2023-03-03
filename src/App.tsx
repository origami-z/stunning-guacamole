import { FlexItem, FlexLayout } from "@salt-ds/core";
import { useState } from "react";
import {
  CustomSandpack,
  DEFAULT_FILES,
  dependencies,
} from "./components/sandpack";
import { ColorPickers } from "./components/visual-editor/ColorPickers";
import { DEFAULT_TOKENS } from "./themes/sample";

import { SandpackProvider } from "@codesandbox/sandpack-react";

import "./App.css";

const InnerApp = () => {
  const [customTheme, setCustomTheme] = useState<any>(DEFAULT_TOKENS);
  console.log("InnerApp", customTheme);

  return (
    <FlexLayout>
      <FlexItem grow={1} shrink={1}>
        <ColorPickers
          themeObj={customTheme}
          onThemeObjChange={(newTheme) => setCustomTheme(newTheme)}
        />
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
