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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(result.rules).toMatchSnapshot();
  });
  test("index.ts", async () => {
    const result = await eslint.calculateConfigForFile("index.ts");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(result.rules).toMatchSnapshot();
  });
});
