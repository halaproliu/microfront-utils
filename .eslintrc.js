module.exports = {
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  globals: {},
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'arrow-parens': 'off',
    'semi-spacing': 0,
    'no-new-func': 0,
    'generator-star-spacing': 'off',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'prefer-const': 'off',
    // 临时去掉vue相关规则
    'import/no-webpack-loader-syntax': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-unused-components': 'off',
    'vue/valid-v-for': 'off',
    'vue/require-v-for-key': 'off',
    'vue/return-in-computed-property': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/no-unused-vars': 'off',
    'no-mixed-operators': 'off',
    'no-case-declarations': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'prefer-promise-reject-errors': 'off',
    'vue/no-parsing-error': 'off', // 可以直接去除
    'no-unused-expressions': 'off',
    'vue/valid-v-model': 'off',
    'no-irregular-whitespace': 'off', // 可以直接去除
    'no-control-regex': 'off'
  }
}