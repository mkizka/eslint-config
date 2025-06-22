import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import type { ConfigWithExtends } from "typescript-eslint";
import tseslint from "typescript-eslint";

import type { SharableConfig } from "./types.js";

export const react: SharableConfig = () => {
  const configs: ConfigWithExtends[] = [
    {
      plugins: {
        react: reactPlugin,
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      rules: {
        ...reactPlugin.configs.recommended.rules,
        ...reactPlugin.configs["jsx-runtime"].rules,
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
    {
      rules: {
        "react/prop-types": "off",
      },
    },
    {
      plugins: {
        "react-hooks": reactHooks,
      },
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
      },
    },
  ];
  return tseslint.config(...configs);
};
