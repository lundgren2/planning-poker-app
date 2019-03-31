module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier/react', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
  },
};
