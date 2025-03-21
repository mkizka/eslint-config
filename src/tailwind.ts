import tailwindcss from "eslint-plugin-tailwindcss";
import type { ConfigWithExtends } from "typescript-eslint";
import tseslint from "typescript-eslint";

import type { SharableConfig } from "./types.js";

type Options = {
  callees?: string[];
};

export const tailwind: SharableConfig<Options> = (options) => {
  const configs: ConfigWithExtends[] = [
    {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      extends: tailwindcss.configs["flat/recommended"],
      rules: {
        "tailwindcss/classnames-order": "error",
        "tailwindcss/no-custom-classname": [
          "error",
          {
            callees: ["cn", "cva", ...(options?.callees ?? [])],
          },
        ],
        "tailwindcss/migration-from-tailwind-2": "error",
      },
    },
  ];
  return tseslint.config(...configs);
};
