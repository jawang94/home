module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'eslint-config-prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        tabWidth: 2,
        singleQuote: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': [
      1,
      'always',
      { ignoreClassFields: true },
    ],
    'react-hooks/rules-of-hooks': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
};
