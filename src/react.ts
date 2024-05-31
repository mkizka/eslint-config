import { fixupPluginRules } from "@eslint/compat";
import reactJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactHooks from "eslint-plugin-react-hooks";
import type { ConfigWithExtends } from "typescript-eslint";
import tseslint from "typescript-eslint";

import type { SharableConfig } from "./types.js";

export const react: SharableConfig = () => {
  const configs: ConfigWithExtends[] = [
    reactRecommended,
    reactJsxRuntime,
    {
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
      plugins: {
        "react-hooks": fixupPluginRules(reactHooks),
      },
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
      },
    },
  ];
  return tseslint.config(...configs);
};
