module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier/react', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-unused-expressions': 0,
    'no-else-return': 0,
    'react/prefer-stateless-function': 0,
    'react/sort-comp': 0,
  },
};
