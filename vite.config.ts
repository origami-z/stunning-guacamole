import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_APP_TITLE || "Local Avocado",
          },
        },
      }),
    ],
    base: "/stunning-guacamole/",
  });
};
