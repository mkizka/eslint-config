import { defineConfig } from "eslint/config";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export const react = defineConfig([
  {
    name: "react",
    files: ["**/*.tsx"],
    extends: [
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat["jsx-runtime"],
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off",
    },
  },
  {
    name: "react-hooks",
    files: ["**/*.tsx"],
    extends: [reactHooks.configs.flat.recommended],
  },
]);
