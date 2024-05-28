// @ts-check
import { configs } from "./dist/index.js";

export default [
  { ignores: ["dist"] },
  ...configs.typescript(),
  ...configs.tailwind(),
  {
    rules: {
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
