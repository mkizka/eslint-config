import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import type { ConfigWithExtends } from "typescript-eslint";
import tseslint from "typescript-eslint";

const compat = new FlatCompat();

type Options = {
  alias?: Record<string, string>;
};

export const mkizka = (
  options?: Options,
): ReturnType<typeof tseslint.config> => {
  const configs: ConfigWithExtends[] = [
    ...tseslint.configs.recommended,
    {
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
      extends: compat.plugins("unused-imports"),
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
      },
    },
    {
      extends: compat.extends("plugin:eqeqeq-fix/recommended"),
      rules: {
        "@typescript-eslint/eqeqeq": "off",
      },
    },
  ];
  if (options?.alias) {
    configs.push({
      extends: compat.extends("plugin:@dword-design/import-alias/recommended"),
      rules: {
        "@dword-design/import-alias/prefer-alias": options?.alias
          ? ["error", { alias: options.alias }]
          : "off",
      },
    });
  }
  return tseslint.config(...configs);
};
