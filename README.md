# @mkizka/eslint-config

```js
// eslint.config.js
import { mkizka } from "@mkizka/eslint-config";

export default mkizka()

// or

export default [
  {
    ignores: [
      ...
    ],
  },
  ...mkizka({
    alias: {
      "@": "./app",
    },
  }),
];
```
