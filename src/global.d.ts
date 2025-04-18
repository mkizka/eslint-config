type Plugin = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  configs: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rules: Record<string, any>;
};

declare module "eslint-plugin-simple-import-sort" {
  const simpleImportSort: Plugin;
  export default simpleImportSort;
}

declare module "eslint-plugin-unused-imports" {
  const unusedImports: Plugin;
  export default unusedImports;
}

declare module "eslint-plugin-eqeqeq-fix" {
  const eqeqeqFix: Plugin;
  export default eqeqeqFix;
}

declare module "@dword-design/eslint-plugin-import-alias" {
  const importAlias: Plugin;
  export default importAlias;
}

declare module "eslint-plugin-react-hooks" {
  const reactHooks: Plugin;
  export default reactHooks;
}
