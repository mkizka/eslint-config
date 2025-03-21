import fs from "fs";
import JSONC from "jsonc-parser";
import path from "path";

type TSConfig = {
  compilerOptions?: {
    paths?: Record<string, string[]>;
  };
};

const readTsconfigPaths = () => {
  const file = (() => {
    try {
      return fs.readFileSync(
        path.join(process.cwd(), "tsconfig.json"),
        "utf-8",
      );
    } catch {
      return null;
    }
  })();
  if (!file) {
    return {};
  }
  const tsconfig = JSONC.parse(file) as TSConfig;
  return tsconfig.compilerOptions?.paths ?? {};
};

export const readAliasFromTsconfig = () => {
  const tsconfig = readTsconfigPaths();
  const alias = Object.fromEntries(
    Object.entries(tsconfig).map(([key, [value]]) => [
      key.replace("/*", ""),
      value.replace("/*", ""),
    ]),
  );
  if (Object.keys(alias).length === 0) {
    return null;
  }
  return alias;
};
