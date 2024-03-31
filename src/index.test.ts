// @ts-ignore
import { FlatESLint as ESLint } from "eslint/use-at-your-own-risk";
import { describe, expect, test } from "vitest";

describe("スナップショットテスト", () => {
  test("index.js", async () => {
    const eslint = new ESLint();
    const result = await eslint.calculateConfigForFile("index.js");
    expect(result).toMatchSnapshot();
  });
  test("index.ts", async () => {
    const eslint = new ESLint();
    const result = await eslint.calculateConfigForFile("index.ts");
    expect(result).toMatchSnapshot();
  });
});
