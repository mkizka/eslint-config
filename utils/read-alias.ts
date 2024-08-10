import fs from "fs";
import JSONC from "jsonc-parser";
import path from "path";

type TSConfig = {
  compilerOptions: {
    paths?: Record<string, string[]>;
  };
};

const readTsconfigPaths = () => {
  try {
    const file = fs.readFileSync(
      path.join(process.cwd(), "tsconfig.json"),
      "utf-8",
    );
    const tsconfig = JSONC.parse(file) as TSConfig;
    return tsconfig.compilerOptions.paths ?? {};
  } catch {
    // eslint-disable-next-line no-console
    console.error(
      "[@mkizka/eslint-config] tsconfig.jsonの読み込みに失敗しました",
    );
    return {};
  }
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
