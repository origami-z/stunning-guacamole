import { FlexItem, FlexLayout } from "@salt-ds/core";
import { useState } from "react";
import { CustomSandpack } from "./components/sandpack";
import { ColorPickers } from "./components/visual-editor/ColorPickers";
import { simpleSample } from "./themes/sample";

import "./App.css";

const App = () => {
  const [customTheme, setCustomTheme] = useState<any>(simpleSample);
  console.log("App", customTheme);
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
export default App;
