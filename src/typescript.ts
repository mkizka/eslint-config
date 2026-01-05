import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import gitignore from "eslint-config-flat-gitignore";
import eqeqeqFix from "eslint-plugin-eqeqeq-fix";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import path from "path";
import tseslint from "typescript-eslint";

export const typescript = defineConfig([
  gitignore(),
  {
    name: "base",
    extends: [eslint.configs.recommended],
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-console": "error",
    },
  },
  {
    name: "typescript",
    files: ["**/*.ts", "**/*.tsx"],
    extends: [tseslint.configs.strictTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: path.resolve(import.meta.dirname, ".."),
      },
    },
    rules: {
      // ts-ignoreよりts-expect-errorを優先するがコメントは不要
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          minimumDescriptionLength: 0,
        },
      ],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: false,
        },
      ],
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
        },
      ],
      // () => asyncFunc() のような書き方を許容する
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/method-signature-style": "error",
      // asによる型アサーションを禁止する
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
          assertionStyle: "never",
        },
      ],
    },
  },
  {
    name: "typescript-tests",
    files: ["**/*.{spec,test}.ts"],
    rules: {
      "@typescript-eslint/no-unsafe-assignment": "off",
    },
  },
  {
    name: "simple-import-sort",
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    name: "unused-imports",
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    name: "eqeqeq-fix",
    plugins: {
      "eqeqeq-fix": eqeqeqFix,
    },
    rules: {
      eqeqeq: "off",
      "@typescript-eslint/eqeqeq": "off",
      "eqeqeq-fix/eqeqeq": "error",
    },
  },
]);
