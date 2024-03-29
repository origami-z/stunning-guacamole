import { SandpackProvider } from "@codesandbox/sandpack-react";
import { FlexItem, FlexLayout, SaltProvider } from "@salt-ds/core";
import { useState } from "react";
import {
  CustomSandpack,
  DEFAULT_REACT_TYPESCRIPT_CRA_FILES,
} from "./components/sandpack";
import { ThemeEditor } from "./components/ThemeEditor";
import { DEFAULT_TOKENS } from "./themes/sample-tokens/default";
import { getInitialPreviewMode, getInitialTheme } from "./utils";

import "./App.css";

// Split the app into 2 parts, so that we can access SandpackProvider
const InnerApp = ({
  initialTheme,
  onToggleAppTheme,
}: {
  initialTheme: any;
  onToggleAppTheme: () => void;
}) => {
  const [customTheme, setCustomTheme] = useState<any>(initialTheme);

  return (
    <FlexLayout className="inner-app" align="stretch">
      <FlexItem
        grow={1}
        shrink={1}
        align="stretch"
        className="theme-definition-panel"
      >
        <ThemeEditor
          themeObj={customTheme}
          onThemeObjChange={(newTheme) => setCustomTheme(newTheme)}
          onToggleAppTheme={onToggleAppTheme}
        />
      </FlexItem>
      <FlexItem grow={2} shrink={1} className="sandpack-preview-panel">
        <CustomSandpack themeObj={customTheme} />
      </FlexItem>
    </FlexLayout>
  );
};

// Gets theme from URL if any
const initialTheme = getInitialTheme(DEFAULT_TOKENS);
const initialPreviewMode = getInitialPreviewMode("light");
const CUSTOM_SETUP = DEFAULT_REACT_TYPESCRIPT_CRA_FILES(
  initialTheme,
  initialPreviewMode as any
);

const App = () => {
  const [appTheme, setAppTheme] = useState<"light" | "dark">("light");
  return (
    <SaltProvider mode={appTheme} applyClassesTo="root">
      <SandpackProvider
        theme={appTheme}
        customSetup={{
          entry: CUSTOM_SETUP.main,
          environment: CUSTOM_SETUP.environment,
        }}
        files={CUSTOM_SETUP.files}
        options={{
          classes: {
            "sp-wrapper": "custom-wrapper",
            "sp-layout": "custom-layout",
            "sp-tab-button": "custom-tab",
          },
          externalResources: [
            // Compensate head bug from sandpack - https://github.com/codesandbox/sandpack/issues/44
            "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=PT+Mono&display=swap",
          ],
          // Custom bundler URL: https://sandpack.codesandbox.io/docs/guides/hosting-the-bundler
          // bundlerURL: ''
        }}
      >
        <InnerApp
          initialTheme={initialTheme}
          onToggleAppTheme={() =>
            setAppTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        />
      </SandpackProvider>
    </SaltProvider>
  );
};
export default App;
