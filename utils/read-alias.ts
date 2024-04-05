import fs from "fs";
import path from "path";

type TSConfig = {
  compilerOptions: {
    paths: Record<string, string[]>;
  };
};

const readTsconfigPaths = () => {
  try {
    const file = fs.readFileSync(
      path.join(process.cwd(), "tsconfig.json"),
      "utf-8",
    );
    const tsconfig = JSON.parse(file) as TSConfig;
    return tsconfig.compilerOptions?.paths ?? {};
  } catch {
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
