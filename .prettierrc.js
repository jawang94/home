module.exports = {
  overrides: [
    {
      files: ['.prettierrc', '.babelrc', '.eslintrc', '.stylelintrc'],
      options: {
        parser: 'json',
      },
    },
  ],
  endOfLine: 'auto',
  tabWidth: 2,
  singleQuote: true,
};
