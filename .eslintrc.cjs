module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "prettier" // sempre por último
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // exemplos de customização
      "react/react-in-jsx-scope": "off", // no Vite/React 17+ não precisa de import React
      "@typescript-eslint/no-unused-vars": ["warn"],
      "react/prop-types": "off",
    },
  };
  