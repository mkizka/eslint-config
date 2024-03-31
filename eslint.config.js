// @ts-check
import config from "./dist/index.js";

export default [
  { ignores: ["dist"] },
  ...config({
    alias: {
      "@": "./src",
    },
  }),
];
