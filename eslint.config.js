// @ts-check
import { configs } from "./dist/index.js";

export default [
  { ignores: ["dist"] },
  ...configs.typescript(),
  ...configs.tailwind(),
];
