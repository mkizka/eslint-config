# @mkizka/eslint-config

ESLint rules for mkizka

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
      "@": "./app", // 指定しなかった場合はtsconfig.jsonの内容を使用します
    },
  }),
];
```
