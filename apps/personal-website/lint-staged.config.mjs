export default {
  '!(*.{ts,tsx})': 'prettier --write',
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
};
