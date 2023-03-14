import { SandpackState } from "@codesandbox/sandpack-react";
import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string";

export const compressObject = (object: object) => {
  const compressed = compressToEncodedURIComponent(JSON.stringify(object));
  return compressed;
};

/**
 * Copied from
 * https://github.com/microsoft/TypeScript-Website/blob/f189f5bcb676dcf6ff04966192593fa40942c62f/packages/playground/src/createUI.ts
 */
const flashInfo = (message: string, timeout = 1000) => {
  let flashBG = document.getElementById("flash-bg");
  if (flashBG) {
    flashBG.parentElement?.removeChild(flashBG);
  }

  flashBG = document.createElement("div");
  flashBG.id = "flash-bg";

  const p = document.createElement("p");
  p.textContent = message;
  flashBG.appendChild(p);
  document.body.appendChild(flashBG);

  setTimeout(() => {
    flashBG?.parentElement?.removeChild(flashBG);
  }, timeout);
};

const PARAM_THEME_PREFIX = "#theme/";

export const shareTheme = (theme: object) => {
  const compressed = compressObject(theme);
  const newURL = PARAM_THEME_PREFIX + compressed;

  console.log("compressed length", compressed.length);
  console.log({ compressed, newURL });

  // Update the URL, then write that to the clipboard
  window.history.replaceState({}, "", newURL);
  window.navigator.clipboard.writeText(location.href.toString()).then(
    () => flashInfo("URL copied to clipboard"),
    (e: any) => alert(e)
  );
};

export const getInitialTheme = (fallback: object) => {
  if (location.hash.startsWith(PARAM_THEME_PREFIX)) {
    const compressedCode = location.hash.replace(PARAM_THEME_PREFIX, "").trim();
    if (compressedCode) {
      const decoded = decompressFromEncodedURIComponent(compressedCode);
      if (decoded) {
        try {
          const parsed = JSON.parse(decoded);
          console.log("Found theme in URL, using it:", parsed);
          flashInfo("Using theme found in the URL", 2000);
          // Remove the hash from url
          window.history.replaceState({}, "", "#");
          return parsed;
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
  return fallback;
};

export const PREVIEW_MODE = "previewMode";

export const getInitialPreviewMode = (fallback: "light" | "dark") => {
  const urlSearchParams = new URLSearchParams(location.search);
  console.log({ urlSearchParams });

  if (urlSearchParams.has(PREVIEW_MODE)) {
    return urlSearchParams.get(PREVIEW_MODE) as string;
  }

  return fallback;
};
