import { FlexItem, FlexLayout } from "@salt-ds/core";
import { ColorPickers } from "./components/visual-editor/ColorPickers";
import { CustomSandpack } from "./components/sandpack";
import { useState } from "react";

import "./App.css";

const defaultTheme = {
  interact: {
    cta: { background: "#D65513" },
    background: { active: "#f3bdee" },
  },
};

const App = () => {
  const [customTheme, setCustomTheme] = useState<any>(defaultTheme);
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
