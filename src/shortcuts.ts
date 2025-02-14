import { extractComments } from './core'

/**
 * Shortcut to extract all single-line comments
 *
 * @param code - input code
 * @returns all single-line comments
 */
export function extractSingleLineComments(code: string) {
  return extractComments(code, {
    multiLine: false,
  }).singleLineComments
}

/**
 * Shortcut to extract all multi-line comments
 *
 * @param code - input code
 * @returns all multi-line comments
 */
export function extractMultiLineComments(code: string) {
  return extractComments(code, {
    singleLine: false,
  }).multiLineComments
}

/**
 * Shortcut to extract all hashbang comments
 *
 * @param code - input code
 * @returns all hashbang comments
 */
export function extractHashbangComments(code: string) {
  return extractComments(code, {
    singleLine: false,
    multiLine: false,
    hashbang: true,
  }).hashbangComments
}

/**
 * Shortcut to extract all comments
 *
 * @param code - input code
 * @returns all comments
 */
export function extractAllComments(code: string) {
  return extractComments(code, {
    hashbang: true,
  }).comments
}
