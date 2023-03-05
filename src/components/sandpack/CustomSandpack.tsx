import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { Button, FlexLayout, StackLayout } from "@salt-ds/core";
import { useEffect, useState } from "react";
import { THEME_CSS } from "./constants";
import { getCodeForCSS } from "./custom-setup";

import "./CustomSandpack.css";

const MutableKeyMap = completionKeymap.slice();

const CustomLayout = () => {
  const [showEditor, setShowEditor] = useState(true);
  return (
    <StackLayout gap={1} className="sandpack-preview-panel-inner">
      <SandpackLayout>
        {showEditor && (
          <SandpackCodeEditor
            closableTabs
            showLineNumbers
            extensions={[autocompletion()]}
            extensionsKeymap={MutableKeyMap}
          />
        )}
        <SandpackPreview
          actionsChildren={
            <Button
              onClick={() => setShowEditor((x) => !x)}
              className="sandpack-button"
            >
              {showEditor ? "Hide " : "Show "}Editor
            </Button>
          }
        />
      </SandpackLayout>
    </StackLayout>
  );
};

const FilesUpdater = ({ theme }: any) => {
  const { sandpack } = useSandpack();
  useEffect(() => {
    sandpack.updateFile(THEME_CSS, getCodeForCSS(theme), true);
  }, [theme]);

  return null;
};

export const CustomSandpack = ({ themeObj }: any) => {
  return (
    <>
      <FilesUpdater theme={themeObj} />
      <CustomLayout />
    </>
  );
};
