module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "unused-imports", "simple-import-sort"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:eqeqeq-fix/recommended",
    "plugin:@dword-design/import-alias/recommended",
  ],
  rules: {
    // @typescript-eslint
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/eqeqeq": "off",
    "@typescript-eslint/no-floating-promises": "error",
    // simple-import-sort
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    // unused-imports
    "unused-imports/no-unused-imports": "error",
  },
};
