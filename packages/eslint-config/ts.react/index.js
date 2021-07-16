module.exports = {
    env: { browser: true, es6: true, node: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "prettier"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "no-unused-vars": "off",
        "no-unexpected-multiline": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/no-non-null-assertion": ["error"],
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/interface-name-prefix": "off"
    },
    settings: {
        react: { version: "detect" }
    }
};
