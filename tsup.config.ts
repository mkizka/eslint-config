import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  external: ["@eslint/js"],
  dts: true,
  clean: true,
});
