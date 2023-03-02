import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { Button, StackLayout } from "@salt-ds/core";
import { useEffect, useState } from "react";
import {
  getCodeForCSS,
  getCodeForJson,
  THEME_FILE,
  THEME_JSON,
} from "./custom-setup";

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

const FilesUpdater = ({ theme }: any) => {
  const { sandpack } = useSandpack();
  useEffect(() => {
    sandpack.updateFile(THEME_FILE, getCodeForCSS(theme), true);
    sandpack.updateFile(THEME_JSON, getCodeForJson(theme), true);
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
