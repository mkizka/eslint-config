import { ESLint } from "eslint";
import { describe, expect, test } from "vitest";

describe("スナップショットテスト", () => {
  test("index.js", async () => {
    const eslint = new ESLint();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await eslint.calculateConfigForFile("index.js");
    expect(result).toMatchSnapshot();
  });
  test("index.ts", async () => {
    const eslint = new ESLint();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await eslint.calculateConfigForFile("index.ts");
    expect(result).toMatchSnapshot();
  });
});
