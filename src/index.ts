import { defineConfig } from "eslint/config";

import { react } from "./react.js";
import { typescript } from "./typescript.js";

export const mkizka = defineConfig(typescript, react);
