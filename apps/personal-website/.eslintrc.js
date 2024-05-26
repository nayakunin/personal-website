const config = {
  root: true,
  extends: ['custom/next'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};

module.exports = config;
