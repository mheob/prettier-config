/** @type {import('prettier').Config} */
module.exports = {
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  printWidth: 100,
  proseWrap: 'always',
  importOrder: ['^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  singleQuote: true,
  semi: true,
  overrides: [
    {
      files: '*.{yaml,yml}',
      options: {
        printWidth: 130,
        singleQuote: false,
      },
    },
  ],
};
