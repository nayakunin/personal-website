module.exports = {
  plugins: ["prettier", "react", "@typescript-eslint", "simple-import-sort", "import"],
  extends: [
    "next",
    "turbo",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier"
  ],
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  rules: {
    "no-console": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/consistent-type-definitions": 0,
    "react/prop-types": 0,
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
