# @mkizka/eslint-config

ESLint rules for mkizka

```js
// eslint.config.js
import { mkizka } from "@mkizka/eslint-config";

export default mkizka

// or
import { defineConfig, globalIgnores } from "eslint/config";
import { mkizka } from "@mkizka/eslint-config";

export default defineConfig([
  globalIgnores([ ... ]),
  mkizka
];
```
