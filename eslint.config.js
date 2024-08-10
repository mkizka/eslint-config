// @ts-check
import { configs } from "./dist/index.js";

export default [
  ...configs.typescript(),
  ...configs.react(),
  ...configs.tailwind(),
];
