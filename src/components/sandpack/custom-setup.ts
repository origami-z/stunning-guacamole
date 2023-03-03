import { SandpackState } from "@codesandbox/sandpack-react";
import { simpleSample } from "../../themes/sample";
import { convertThemeObjToCss } from "../../themes/utils";

export const dependencies = {
  "@salt-ds/core": "latest",
  "@salt-ds/icons": "latest",
  "@salt-ds/lab": "latest",
  "@salt-ds/theme": "latest",
};
export const THEME_FILE = "/Theme.css";
export const THEME_JSON = "/theme.json";

export const getCodeForCSS = (theme: any) => `.custom-theme.salt-theme {
  ${convertThemeObjToCss(theme).join("\n  ")}
}`;

export const getCodeForJson = (theme: any) => JSON.stringify(theme, null, 2);

export const DEFAULT_FILES: SandpackState["files"] = {
  "/App.tsx": {
    code: `import { Button, SaltProvider, StackLayout, FlexLayout, Tooltip } from '@salt-ds/core';
import { InfoIcon, ThumbsUpIcon, ThumbsDownIcon } from '@salt-ds/icons';
import { List } from '@salt-ds/lab';
import "./Theme.css";
import "./App.css";

const shortColorData = [
  'Baby blue',
  'Black',
  'Blue',
  'Brown',
  'Green',
  'Orange',
  'Pink',
  'Purple',
  'Red',
  'White',
  'Yellow',
];

export default function App(): JSX.Element {
  return (
    <StackLayout>
      <List source={shortColorData} selected={shortColorData[3]} />
      <FlexLayout align="center">
        <Button variant="cta">
          <ThumbsUpIcon /> CTA
        </Button>
        <Button variant="primary">
          Primary
        </Button>
        <Tooltip open content="Tooltip">
          <Button variant="secondary">
            <InfoIcon /> Secondary
          </Button>
        </Tooltip>
      </FlexLayout>
    </StackLayout>
  )
}
`,
  },
  "/App.css": {
    code: "",
  },
  "/public/index.html": {
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=PT+Mono&display=swap"
rel="stylesheet"
/>
</head>
<body>
<div id="root"></div>
</body>
</html>`,
    hidden: true,
  },
  "/index.tsx": {
    code: `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import <SaltProvider>
import { SaltProvider } from "@salt-ds/core";

// Import theme CSS
import "@salt-ds/theme/index.css";

import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
<StrictMode>
<SaltProvider theme="custom-theme">
<App />
</SaltProvider>
</StrictMode>
);`,
    // hidden: true,
  },
  [THEME_FILE]: {
    code: getCodeForCSS(simpleSample),
  },
  [THEME_JSON]: {
    code: getCodeForJson(simpleSample),
    readOnly: true,
  },
};
