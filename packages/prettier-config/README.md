# ESLint configuration

## Installation
```sh
yarn add --dev @soundgym/prettier-config
```

## Usage
1. package.json
```json
{
  "prettier": "@soundgym/prettier-config"
}
```

2. prettier.config.js
```js
module.exports = {
  ...require("@soundgym/prettier-config"),
  // ...
}
```

## Options
default parser is typescript <br/>
If you are using only javascript, just append `js`
```json
{
  "prettier": "@soundgym/prettier-config/js"
}
```
