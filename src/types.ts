import type { JSXToken, Token } from 'js-tokens'

type BaseComment<T extends JSXToken['type'] | Token['type']> = {
  type: T
  value: string
}

/**
 * @pg
 */
export type HashbangComment = BaseComment<'HashbangComment'>
export type MultiLineComment = BaseComment<'MultiLineComment'> & {
  closed: boolean
}
export type SingleLineComment = BaseComment<'SingleLineComment'>

/**
 * @pg
 */
export type ExtractComment =
  | HashbangComment
  | MultiLineComment
  | SingleLineComment
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
export interface ExtractResult {
  comments: ExtractComment[]
  hashbangComments: HashbangComment[]
  multiLineComments: MultiLineComment[]
  singleLineComments: SingleLineComment[]
}
