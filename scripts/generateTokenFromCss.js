/***
 * WARNING: only support 6 digit hex / rgb color and simple var reference right now.
 *
 * node generateTokenFromCss.js /path/to/input.css
 *
 * ./output.js will be written out
 **/

import fs from "fs";

const args = process.argv.slice(2);

if (args.length !== 1) throw new Error("Need 1 file as input arg");

const filePath = args[0];

const file = fs.readFileSync(filePath, { encoding: "utf-8" });

if (!file) throw new Error("Can not read file content from path");

const fileLines = file.split("\n");

const mappedObject = fileLines.reduce((prev, current) => {
  const line = current.trim();

  // Is CSS variable declaration
  if (line.startsWith("--")) {
    const [name, rawValue] = line.split(":");
    const value = rawValue.replace(";", "").trim();
    if (/^rgb/i.test(value) || /^#/i.test(value)) {
      const rgb = extractRgb(value);
      if (rgb) {
        prev[name.replace("--", "").split("-").join(".")] = {
          $type: "color",
          $value: rgb,
        };
      } else {
        console.warn("Failed to parse color, ignore", line);
      }
    } else {
      const matchCssVarReference = value.match(/^var\((.*)\)$/i);
      if (matchCssVarReference) {
        const cssReference = matchCssVarReference[1];
        prev[name.replace("--", "").split("-").join(".")] = {
          $type: "color",
          $value: "{" + cssReference.replace("--", "").replace(/-/g, ".") + "}",
        };
      } else if (value === "transparent") {
        prev[name.replace("--", "").split("-").join(".")] = {
          $type: "color",
          $value: { r: 0, g: 0, b: 0, a: 0 },
        };
      } else {
        console.warn("Ignore line failed to parse", line);
      }
    }
  }

  return prev;
}, {});

const result = deepen(mappedObject);

console.log("result", result);

fs.writeFileSync(
  "./output.js",
  `const converted = ${JSON.stringify(result, null, 2)}`
);

// Copied from https://stackoverflow.com/a/7794127
function deepen(obj) {
  const result = {};

  // For each object path (property key) in the object
  for (const objectPath in obj) {
    // Split path into component parts
    const parts = objectPath.split(".");

    // Create sub-objects along path as needed
    let target = result;
    while (parts.length > 1) {
      const part = parts.shift();
      target = target[part] = target[part] || {};
    }

    // Set value at end of path
    target[parts[0]] = obj[objectPath];
  }

  return result;
}

export function hex2Rgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function extractRgb(colorString) {
  if (colorString.startsWith("#")) {
    return hex2Rgb(colorString) || { r: 1, g: 1, b: 1 };
  } else {
    const array = colorString
      .replace(/[^\d,]/g, "")
      .split(",")
      .map((x) => Number.parseInt(x));
    return {
      r: array[0],
      g: array[1],
      b: array[2],
    };
  }
}
