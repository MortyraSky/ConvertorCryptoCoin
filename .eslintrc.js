module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "react-hooks"
  ],
  rules: {
    // "linebreak-style":["error", "windows"],
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", "tsx"] }],
    "import/extensions": [".js", ".jsx", ".json", ".ts", ".tsx"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off",
    "prefer-const": 'off',
    "linebreak-style": 0,
    "global-require": 0,
    "eslint linebreak-style": [0, "error", "windows"],
    "import/extensions": [
      "error",
      "never",
      {
        ts: "never",
        tsx: "never",
        js: "never",
        jsx: "never"
      }
    ]
  },
};
