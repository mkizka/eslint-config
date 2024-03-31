import { execSync } from "child_process";
import { describe, expect, test } from "vitest";

const exec = (cmd: string) => JSON.parse(execSync(cmd).toString());

describe("スナップショットテスト", () => {
  test("index.js", async () => {
    const result = exec("pnpm eslint --print-config index.js");
    expect(result).toMatchSnapshot();
  });
  test("index.ts", async () => {
    const result = exec("pnpm eslint --print-config index.ts");
    expect(result).toMatchSnapshot();
  });
});
