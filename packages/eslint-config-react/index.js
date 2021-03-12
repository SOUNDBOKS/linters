module.exports = {
  extends: ["plugin:react/recommended"],
  plugins: ["react", "react-hooks"],
  parserOptions: {
    jsx: true,
  },
  rules: {
    "react/jsx-key": "error",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
