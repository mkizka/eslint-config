# @mkizka/eslint-config

ESLint rules for mkizka

```js
// eslint.config.js
import { configs } from "@mkizka/eslint-config";

export default configs.typescript()

// or

export default [
  {
    ignores: [
      ...
    ],
  },
  ...configs.typescript({
    alias: {
      "@": "./app", // 指定しなかった場合はtsconfig.jsonの内容を使用します
    },
  }),
  ...configs.react(),
  ...configs.tailwind(),
];
```
