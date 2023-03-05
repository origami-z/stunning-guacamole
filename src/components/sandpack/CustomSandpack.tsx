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
import { ShareButton } from "./ShareButton";

const MutableKeyMap = completionKeymap.slice();

const CustomLayout = ({ theme }: any) => {
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

      <FlexLayout gap={2}>
        <Button onClick={() => setShowEditor((x) => !x)}>
          {showEditor ? "Hide " : "Show "}Editor
        </Button>
        <ShareButton theme={theme} />
      </FlexLayout>
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
      <CustomLayout theme={themeObj} />
    </>
  );
};
