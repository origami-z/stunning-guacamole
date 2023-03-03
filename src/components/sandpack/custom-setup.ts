import { SandpackState } from "@codesandbox/sandpack-react";
import { DEFAULT_TOKENS } from "../../themes/sample-tokens/default";
import { convertThemeObjToCss } from "../../themes/utils";
import { APP_TEMPLATE_1 } from "./appCodeTemplates";

export const SALT_DEPENDENCIES = {
  "@salt-ds/core": "latest",
  "@salt-ds/data-grid": "latest",
  "@salt-ds/icons": "latest",
  "@salt-ds/lab": "latest",
  "@salt-ds/theme": "latest",
};
export const APP_FILE = "/App.tsx";
export const THEME_FILE = "/Theme.css";

export const getCodeForCSS = (theme: any) => `.custom-theme.salt-theme {
  ${convertThemeObjToCss(theme).join("\n  ")}
}`;

export const DEFAULT_VITE_FILES: SandpackState["files"] = {
  [APP_FILE]: {
    code: APP_TEMPLATE_1,
  },
  "/App.css": {
    code: "",
  },
  "/styles.css": {
    code: ``,
    hidden: true,
  },
  "/index.tsx": {
    code: `import { StrictMode } from "react";
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
  },
  "/index.html": {
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vite App</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=PT+Mono&display=swap"
    rel="stylesheet"
  />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/index.tsx"></script>
</body>
</html>
`,
    hidden: true,
  },
  "/package.json": {
    code: JSON.stringify({
      scripts: {
        dev: "vite",
        build: "vite build",
        preview: "vite preview",
      },
      dependencies: {
        react: "^18.2.0",
        "react-dom": "^18.2.0",
        ...SALT_DEPENDENCIES,
      },
      devDependencies: {
        "@vitejs/plugin-react": "3.1.0",
        vite: "4.0.0",
        "esbuild-wasm": "0.15.12",
      },
    }),
    hidden: true,
  },
  "/vite.config.js": {
    code: `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
});
`,
    hidden: true,
  },
  [THEME_FILE]: {
    code: getCodeForCSS(DEFAULT_TOKENS),
  },
};
