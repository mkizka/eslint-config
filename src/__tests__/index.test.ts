import { ESLint } from "eslint";
import path from "path";
import { describe, expect, test } from "vitest";

import { mkizka } from "../index.js";

const eslint = new ESLint({
  baseConfig: mkizka,
  overrideConfigFile: true,
});

const fixturesDir = path.resolve(import.meta.dirname, "fixtures");

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
  test("index.tsx", async () => {
    const result = await eslint.calculateConfigForFile("index.tsx");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(result.rules).toMatchSnapshot();
  });
});

describe("ルール動作確認", () => {
  const hasViolations = (results: ESLint.LintResult[]) =>
    results.some((r) => r.messages.some((m) => m.ruleId !== null));

  test("TypeScriptのルールが動作する", async () => {
    const results = await eslint.lintFiles([
      path.join(fixturesDir, "typescript.ts"),
    ]);
    expect(hasViolations(results)).toBe(true);
  });

  test("Reactのルールが動作する", async () => {
    const results = await eslint.lintFiles([
      path.join(fixturesDir, "react.tsx"),
    ]);
    expect(hasViolations(results)).toBe(true);
  });
});
