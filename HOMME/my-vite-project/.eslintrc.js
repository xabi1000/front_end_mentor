module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'eslint-config-prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'warn',
  },
}
