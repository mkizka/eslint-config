import { ESLint } from "eslint";
import { describe, expect, test } from "vitest";

import { mkizka } from "./index.js";

const eslint = new ESLint({
  baseConfig: mkizka,
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
