import jsTokens from 'js-tokens'
import type {
  ExtractComment,
  ExtractOptions,
  ExtractResult,
  HashbangComment,
  MultiLineComment,
  SingleLineComment,
} from './types'

/**
 * extract comments from code
 *
 * @param code - input code
 * @param options - extract options {@link ExtractOptions}
 * @returns extracted result {@link ExtractResult}
 */
export function extractComments(
  code: string,
  options: ExtractOptions = {},
): ExtractResult {
  const {
    jsx = false,
    singleLine = true,
    multiLine = true,
    hashbang = false,
  } = options
  const comments: ExtractComment[] = []
  const singleLineComments: SingleLineComment[] = []
  const multiLineComments: MultiLineComment[] = []
  const hashbangComments: HashbangComment[] = []

  for (const token of jsTokens(code, { jsx })) {
    if (singleLine && token.type === 'SingleLineComment') {
      comments.push(token)
      singleLineComments.push(token)
    }

    if (multiLine && token.type === 'MultiLineComment') {
      comments.push(token)
      multiLineComments.push(token)
    }

    if (hashbang && token.type === 'HashbangComment') {
      comments.push(token)
      hashbangComments.push(token)
    }
  }

  return {
    comments,
    singleLineComments,
    multiLineComments,
    hashbangComments,
  }
}
