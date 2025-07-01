# extract-comments-es

[![CI](https://github.com/ntnyq/extract-comments-es/workflows/CI/badge.svg)](https://github.com/ntnyq/extract-comments-es/actions)
[![NPM VERSION](https://img.shields.io/npm/v/extract-comments-es.svg)](https://www.npmjs.com/package/extract-comments-es)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/extract-comments-es.svg)](https://www.npmjs.com/package/extract-comments-es)
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

## API

### extractComments

- **Type**: `(code: string, options: ExtractOptions = {}) => ExtractResult`

Extract comments from code. By default, it ignores `HashbangComment`.

### extractAllComments

- **Type**: `(code: string) => ExtractComment[]`

Shortcut to extract all comments.

### extractSingleLineComments

- **Type**: `(code: string) => SingleLineComment[]`

Shortcut to extract all single-line comments.

### extractMultiLineComments

- **Type**: `(code: string) => MultiLineComment[]`

Shortcut to extract all multi-line comments.

### extractHashbangComments

- **Type**: `(code: string) => HashbangComment[]`

Shortcut to extract all hashbang comments.

## Interface

```ts
export interface ExtractOptions {
  /**
   * Whether extract hashbang comments
   *
   * @default false
   */
  hashbang?: boolean

  /**
   * Enable JSX support
   *
   * @default false
   */
  jsx?: boolean

  /**
   * Whether extract multi-line comments
   *
   * @default true
   */
  multiLine?: boolean

  /**
   * Whether extract single-line comments
   *
   * @default true
   */
  singleLine?: boolean
}

type BaseComment<T extends JSXToken['type'] | Token['type']> = {
  type: T
  value: string
}

export type HashbangComment = BaseComment<'HashbangComment'>
export type MultiLineComment = BaseComment<'MultiLineComment'> & {
  closed: boolean
}
export type SingleLineComment = BaseComment<'SingleLineComment'>

export type ExtractComment =
  | HashbangComment
  | MultiLineComment
  | SingleLineComment

export interface ExtractResult {
  comments: ExtractComment[]
  hashbangComments: HashbangComment[]
  multiLineComments: MultiLineComment[]
  singleLineComments: SingleLineComment[]
}
```

## Credits

- [lydell/js-tokens](https://github.com/lydell/js-tokens)

## License

[MIT](./LICENSE) License © 2025-PRESENT [ntnyq](https://github.com/ntnyq)
