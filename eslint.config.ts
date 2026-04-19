import { defineConfig } from "eslint/config";

import { mkizka } from "./src/index.js";

export default defineConfig([{ ignores: ["**/fixtures/**"] }, ...mkizka]);
