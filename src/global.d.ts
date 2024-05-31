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

declare module "eslint-plugin-tailwindcss" {
  const importAlias: Plugin;
  export default importAlias;
}

declare module "@eslint/compat" {
  export function fixupPluginRules(plugin: Plugin): Plugin;
}

declare module "eslint-plugin-react/configs/jsx-runtime.js" {
  const reactJsxRuntime: Plugin;
  export default reactJsxRuntime;
}

declare module "eslint-plugin-react/configs/recommended.js" {
  const reactRecommended: Plugin;
  export default reactRecommended;
}

declare module "eslint-plugin-react-hooks" {
  const reactHooks: Plugin;
  export default reactHooks;
}
