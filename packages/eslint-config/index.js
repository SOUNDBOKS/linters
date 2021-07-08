module.exports = {
  extends: ["eslint:recommended", "plugin:json/recommended", "plugin:prettier/recommended"],
  plugins: ["json", "prettier"],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
  },
  globals: {
    window: true,
    document: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "no-console": "error",
    "array-callback-return": "error",
    "eqeqeq": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-unused-expressions": "error",
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
      rules: {
        "no-var": "off",
        "prefer-const": "off",
      },
    },
  ],
  ignorePatterns: [
    "!/.eslintrc.js",
    "!/.prettierrc.js",
    ".cache",
    ".next",
    "node_modules",
    "out",
    "package-lock.json",
    "public",
  ],
};
