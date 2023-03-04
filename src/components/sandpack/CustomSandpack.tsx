import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { Button, StackLayout } from "@salt-ds/core";
import { useEffect, useState } from "react";
import { THEME_CSS } from "./constants";
import { getCodeForCSS } from "./custom-setup";

const MutableKeyMap = completionKeymap.slice();

const CustomLayout = () => {
  const [showEditor, setShowEditor] = useState(true);
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
