# extract-comments-es

[![CI](https://github.com/ntnyq/extract-comments-es/workflows/CI/badge.svg)](https://github.com/ntnyq/extract-comments-es/actions)
[![NPM VERSION](https://img.shields.io/npm/v/extract-comments-es.svg)](https://www.npmjs.com/package/extract-comments-es)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/extract-comments-es.svg)](https://www.npmjs.com/package/extract-comments-es)
[![CODECOV](https://codecov.io/github/ntnyq/extract-comments-es/branch/main/graph/badge.svg)](https://codecov.io/github/ntnyq/extract-comments-es)
[![LICENSE](https://img.shields.io/github/license/ntnyq/extract-comments-es.svg)](https://github.com/ntnyq/extract-comments-es/blob/main/LICENSE)

Extract comments from JS, JSX via [js-tokens](https://github.com/lydell/js-tokens).

## Install

```shell
npm install extract-comments-es
```

```shell
yarn add extract-comments-es
```

```shell
pnpm add extract-comments-es
```

## Usage

```ts
import { extractComments } from 'extract-comments-es'

const code = `
// This is foo
const foo = 'foo'

/**
 * This is bar 
 */
const bar = 'bar'
`

const result = extractComments(code)

console.log(result.comments)
```

## Credits

- [lydell/js-tokens](https://github.com/lydell/js-tokens)

## License

[MIT](./LICENSE) License © 2025-PRESENT [ntnyq](https://github.com/ntnyq)
