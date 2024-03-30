import eslint from "@eslint/js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default ({ alias }) =>
  tseslint.config(eslint.configs.recommended, {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    extends: [
      ...tseslint.configs.recommended,
      ...compat.extends(
        "plugin:eqeqeq-fix/recommended",
        "plugin:@dword-design/import-alias/recommended",
      ),
    ],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // @typescript-eslint
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/eqeqeq": "off",
      "@typescript-eslint/no-floating-promises": "error",
      // simple-import-sort
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      // @dword-design/import-alias
      "@dword-design/import-alias/prefer-alias": ["error", { alias }],
    },
  });
