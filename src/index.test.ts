import { ESLint } from "eslint";
import { describe, expect, test } from "vitest";

import { configs } from "./index.js";

const eslint = new ESLint({
  // @ts-expect-error
  baseConfig: [...configs.typescript(), ...configs.react()],
  overrideConfigFile: true,
});

describe("スナップショットテスト", () => {
  test("index.js", async () => {
    const result = await eslint.calculateConfigForFile("index.js");
    expect(result).toMatchSnapshot();
  });
  test("index.ts", async () => {
    const result = await eslint.calculateConfigForFile("index.ts");
    expect(result).toMatchSnapshot();
  });
});
