import importAlias from "@dword-design/eslint-plugin-import-alias";
import eslint from "@eslint/js";
import eqeqeqFix from "eslint-plugin-eqeqeq-fix";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import type { ConfigWithExtends } from "typescript-eslint";
import tseslint from "typescript-eslint";

import { readAliasFromTsconfig } from "@/utils/read-alias.js";

type Options = {
  alias?: Record<string, string>;
};

export const mkizka = (
  options?: Options,
): ReturnType<typeof tseslint.config> => {
  const configs: ConfigWithExtends[] = [
    eslint.configs.recommended,
    {
      linterOptions: {
        reportUnusedDisableDirectives: "error",
      },
    },
    {
      files: ["**/*.js", "**/*.jsx"],
      languageOptions: {
        globals: {
          ...globals.node,
        },
      },
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: tseslint.configs.recommendedTypeChecked,
      languageOptions: {
        parserOptions: {
          project: true,
        },
      },
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-floating-promises": "error",
      },
    },
    {
      plugins: {
        "simple-import-sort": simpleImportSort,
      },
      rules: {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
      },
    },
    {
      plugins: {
        "unused-imports": unusedImports,
      },
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
      },
    },
    {
      plugins: {
        "eqeqeq-fix": eqeqeqFix,
      },
      rules: {
        eqeqeq: "off",
        "@typescript-eslint/eqeqeq": "off",
        "eqeqeq-fix/eqeqeq": "error",
      },
    },
  ];
  const alias = options?.alias ?? readAliasFromTsconfig();
  if (alias) {
    configs.push({
      plugins: {
        "@dword-design/import-alias": importAlias,
      },
      rules: {
        "@dword-design/import-alias/prefer-alias": ["error", { alias }],
      },
    });
  }
  return tseslint.config(...configs);
};
