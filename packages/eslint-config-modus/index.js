module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'import'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    curly: 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['tests*/**', 'scripts/**'],
      },
    ],
    'no-else-return': 'error',
    'no-inner-declarations': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'react/no-deprecated': 'off',
    'react/prop-types': 'off',
    strict: 'error',
    'symbol-description': 'error',
    yoda: [
      'error',
      'never',
      {
        exceptRange: true,
      },
    ],
  },
};
