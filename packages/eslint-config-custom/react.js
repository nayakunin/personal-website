module.exports = {
  plugins: ['react'],
  extends: ['./index.js', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-key': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
