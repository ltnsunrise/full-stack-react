module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  // using the latest ECMAScript version and ESM
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  //  react plugin to detect our installed React version automatically
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  // overrides array: specify that ESLint should only lint .js and .jsx files
  overrides: [
    {
      files: ['*.js', '*.jsx'],
    },
  ],
}
