import { ESLint } from "eslint";
import path from "path";
import { describe, expect, test } from "vitest";

import { mkizka } from "../index.js";

const eslint = new ESLint({
  baseConfig: mkizka,
  overrideConfigFile: true,
});

const fixturesDir = path.resolve(import.meta.dirname, "fixtures");

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
