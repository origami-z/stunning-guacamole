import { DEFAULT_TOKENS } from "../../themes/sample-tokens/default";
import { convertThemeObjToCss } from "../../themes/utils";
import { APP_TEMPLATE_F } from "./code-templates";
import { APP_CSS, APP_FILE, SALT_DEPENDENCIES, THEME_CSS } from "./constants";

const DEFAULT_APP_TEMPLATE = APP_TEMPLATE_F;

export const getCodeForCSS = (theme: any) => `.custom-theme.salt-theme {
  ${convertThemeObjToCss(theme).join("\n  ")}
}`;

export const FILE_INDEX = "/index.tsx";
const FILE_INDEX_CODE = (
  mode: "light" | "dark"
) => `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SaltProvider } from "@salt-ds/core";

// Import Salt default theme CSS
import "@salt-ds/theme/index.css";

// Import custom theme auto generated from JSON
import "./Theme.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <SaltProvider theme="custom-theme" mode="${mode}">
      <App />
    </SaltProvider>
  </StrictMode>
);
`;

// CRA env has problem not loading index.html to load font
// https://github.com/codesandbox/sandpack/issues/44
export const DEFAULT_REACT_TYPESCRIPT_CRA_FILES = (
  theme = DEFAULT_TOKENS,
  mode = "light" as const
) => ({
  main: "/index.tsx",
  environment: "create-react-app" as const,
  files: {
    [APP_FILE]: {
      code: DEFAULT_APP_TEMPLATE[APP_FILE],
    },
    [THEME_CSS]: {
      code: getCodeForCSS(theme),
    },
    [APP_CSS]: {
      code: DEFAULT_APP_TEMPLATE[APP_CSS],
    },
    "tsconfig.json": {
      code: `{
  "include": [
    "./**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [ "dom", "es2015" ],
    "jsx": "react-jsx"
  }
}`,
      hidden: true,
    },
    [FILE_INDEX]: {
      code: FILE_INDEX_CODE(mode),
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

    "/package.json": {
      code: JSON.stringify({
        dependencies: {
          react: "^18.0.0",
          "react-dom": "^18.0.0",
          "react-scripts": "^4.0.0",
          ...SALT_DEPENDENCIES,
        },
        devDependencies: {
          "@types/react": "^18.0.0",
          "@types/react-dom": "^18.0.0",
          typescript: "^4.0.0",
        },
        main: "/index.tsx",
      }),
      hidden: true,
    },
  },
});

// node env is too slow to load and fail too often
export const DEFAULT_VITE_FILES = (
  theme = DEFAULT_TOKENS,
  mode = "light" as const
) => ({
  main: "/App.tsx",
  environment: "node" as const,
  files: {
    [APP_FILE]: {
      code: DEFAULT_APP_TEMPLATE[APP_FILE],
    },
    [THEME_CSS]: {
      code: getCodeForCSS(theme),
    },
    [APP_CSS]: {
      code: DEFAULT_APP_TEMPLATE[APP_CSS],
    },
    [FILE_INDEX]: {
      code: FILE_INDEX_CODE(mode),
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
  },
});
