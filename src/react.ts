import eslintReact from "@eslint-react/eslint-plugin";
import { defineConfig } from "eslint/config";

export const react = defineConfig([
  {
    name: "react",
    files: ["**/*.tsx"],
    extends: [eslintReact.configs["recommended-typescript"]],
  },
]);
