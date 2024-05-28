type Plugin = {
  configs: Record<string, any>;
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

declare module "eslint-plugin-tailwindcss" {
  const importAlias: Plugin;
  export default importAlias;
}
