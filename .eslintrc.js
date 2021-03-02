const isProd = process.env.NODE_ENV === "production";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks", "prettier"],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    jsx: true,
  },
  settings: {
    react: {
      version: "17.0",
    },
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
    "no-console": isProd ? "error" : "off",
    "array-callback-return": "error",
    "eqeqeq": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-unused-expressions": "error",
    "prettier/prettier": "error",
    "react/jsx-key": "error",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
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
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
