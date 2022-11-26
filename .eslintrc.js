module.exports = {
  plugins: ["react", "prettier"],
  extends: [
    "react-app",
    "react-app/jest",
    "airbnb",
    "airbnb/hooks",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "consistent-return": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "arrow-body-style": "off",
    "react/destructuring-assignment": "off",
    "no-use-before-define": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/forbid-prop-types": "off",
    camelcase: "off",
   
  },
};
