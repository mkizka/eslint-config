import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import type { ConfigWithExtends } from "typescript-eslint";
import tseslint from "typescript-eslint";

import type { SharableConfig } from "./types.js";

export const react: SharableConfig = () => {
  const configs: ConfigWithExtends[] = [
    // @ts-expect-error
    reactPlugin.configs.flat.recommended,
    // @ts-expect-error
    reactPlugin.configs.flat["jsx-runtime"],
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
