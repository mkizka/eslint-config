import fs from "fs";
import { describe, expect, test, vi } from "vitest";

import { readAliasFromTsconfig } from "./read-alias.js";

vi.mock("fs");
const mockedFs = vi.mocked(fs);

describe("readAliasFromTsconfig", () => {
  test.each`
    paths                                           | expected
    ${{ "@/*": ["src/*"] }}                         | ${{ "@": "src" }}
    ${{ "@/*": ["./src/*", "./others"] }}           | ${{ "@": "./src" }}
    ${{ "@foo": ["./foo"], "@bar/*": ["./bar/*"] }} | ${{ "@foo": "./foo", "@bar": "./bar" }}
    ${{}}                                           | ${null}
  `("tsconfigのpathsをkey-value形式で取得する", ({ paths, expected }) => {
    // arrange
    mockedFs.readFileSync.mockReturnValue(
      JSON.stringify({
        compilerOptions: {
          paths: paths as Record<string, string[]>,
        },
      }),
    );
    // act
    const alias = readAliasFromTsconfig();
    // assert
    expect(alias).toEqual(expected);
  });
  test("tsconfig.jsonが存在しない場合はnullを返す", () => {
    // arrange
    mockedFs.readFile.mockRejectedValue(new Error());
    // act
    const alias = readAliasFromTsconfig();
    // assert
    expect(alias).toEqual(null);
  });
});
