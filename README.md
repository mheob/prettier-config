# :warning: This repository is moved to [github.com/mheob/config](https://github.com/mheob/config)!

~# My personal [Prettier](https://prettier.io) config~

To make my configurations a bit easier I share my prettier config.

## Usage

### Install

```sh
# with npm
npm install -D @mheob/prettier-config

# with yarn
yarn add -D @mheob/prettier-config

# with pnpm
pnpm add -D @mheob/prettier-config
```

### Edit `package.json`

```jsonc
{
  // ...
  "prettier": "@mheob/prettier-config"
}
```

### Override settings

If you need to override some settings you can do it this way:

```js
// .prettierrc.cjs
module.exports = {
  ...require('@mheob/prettier-config'),
  semi: false,
};
```

## Ruleset

This configuration uses the
[`@trivago/prettier-plugin-sort-imports`](https://github.com/trivago/prettier-plugin-sort-imports)
plugin and set these styles:

```js
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
```
