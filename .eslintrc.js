module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard"
  ],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6,
    sourceType: "module"
  },
  globals: {
    _: true
  },
  rules: {
    "no-console": "error",
    "no-debugger": "error",
    "object-curly-spacing": "off",
    "vue/no-parsing-error": [
      2,
      {
        "x-invalid-end-tag": false
      }
    ],
    "no-throw-literal": 0
  },
  plugins: ["html", "standard"]
}
