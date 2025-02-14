import { expect, it } from 'vitest'
import {
  extractAllComments,
  extractComments,
  extractHashbangComments,
  extractMultiLineComments,
  extractSingleLineComments,
} from '../src'
import FIXTURE_APP from './fixtures/app.js?raw'

it('extractComments', () => {
  const result = extractComments(FIXTURE_APP, {
    hashbang: true,
  })

  expect(result.comments.length).toMatchInlineSnapshot(`6`)
  expect(result.singleLineComments.length).toMatchInlineSnapshot(`1`)
  expect(result.multiLineComments.length).toMatchInlineSnapshot(`4`)
  expect(result.hashbangComments.length).toMatchInlineSnapshot(`1`)

  expect(
    result.singleLineComments.length
      + result.multiLineComments.length
      + result.hashbangComments.length,
  ).toBe(result.comments.length)

  expect(result).toMatchInlineSnapshot(`
    {
      "comments": [
        {
          "type": "HashbangComment",
          "value": "#!/usr/bin/env node",
        },
        {
          "closed": true,
          "type": "MultiLineComment",
          "value": "/**
     * Create an instance of App with \`options\`.
     *
     * @param {Object} options
     * @api public
     */",
        },
        {
          "closed": true,
          "type": "MultiLineComment",
          "value": "/**
     * Set \`key\` on cache with the given \`value\`
     *
     * @param {String} \`key\`
     * @param {any} \`value\`
     * @api public
     */",
        },
        {
          "type": "SingleLineComment",
          "value": "// this is a line comment",
        },
        {
          "closed": true,
          "type": "MultiLineComment",
          "value": "/**
     * Get \`key\` from cache.
     *
     * @param {String} \`key\`
     * @api public
     */",
        },
        {
          "closed": true,
          "type": "MultiLineComment",
          "value": "/**
     * Delete \`key\` from cache
     *
     * @param {String} \`key\`
     * @param {any} value
     * @api public
     */",
        },
      ],
      "hashbangComments": [
        {
          "type": "HashbangComment",
          "value": "#!/usr/bin/env node",
        },
      ],
      "multiLineComments": [
        {
          "closed": true,
          "type": "MultiLineComment",
          "value": "/**
     * Create an instance of App with \`options\`.
     *
     * @param {Object} options
     * @api public
     */",
        },
        {
          "closed": true,
          "type": "MultiLineComment",
          "value": "/**
     * Set \`key\` on cache with the given \`value\`
     *
     * @param {String} \`key\`
     * @param {any} \`value\`
     * @api public
     */",
        },
        {
          "closed": true,
          "type": "MultiLineComment",
          "value": "/**
     * Get \`key\` from cache.
     *
     * @param {String} \`key\`
     * @api public
     */",
        },
        {
          "closed": true,
          "type": "MultiLineComment",
          "value": "/**
     * Delete \`key\` from cache
     *
     * @param {String} \`key\`
     * @param {any} value
     * @api public
     */",
        },
      ],
      "singleLineComments": [
        {
          "type": "SingleLineComment",
          "value": "// this is a line comment",
        },
      ],
    }
  `)
})

it('extractAllComments', () => {
  expect(extractAllComments(FIXTURE_APP)).toMatchInlineSnapshot(`
    [
      {
        "type": "HashbangComment",
        "value": "#!/usr/bin/env node",
      },
      {
        "closed": true,
        "type": "MultiLineComment",
        "value": "/**
     * Create an instance of App with \`options\`.
     *
     * @param {Object} options
     * @api public
     */",
      },
      {
        "closed": true,
        "type": "MultiLineComment",
        "value": "/**
     * Set \`key\` on cache with the given \`value\`
     *
     * @param {String} \`key\`
     * @param {any} \`value\`
     * @api public
     */",
      },
      {
        "type": "SingleLineComment",
        "value": "// this is a line comment",
      },
      {
        "closed": true,
        "type": "MultiLineComment",
        "value": "/**
     * Get \`key\` from cache.
     *
     * @param {String} \`key\`
     * @api public
     */",
      },
      {
        "closed": true,
        "type": "MultiLineComment",
        "value": "/**
     * Delete \`key\` from cache
     *
     * @param {String} \`key\`
     * @param {any} value
     * @api public
     */",
      },
    ]
  `)
})

it('extractHashbangComments', () => {
  expect(extractHashbangComments(FIXTURE_APP)).toMatchInlineSnapshot(`
    [
      {
        "type": "HashbangComment",
        "value": "#!/usr/bin/env node",
      },
    ]
  `)
})

it('extractSingleLineComments', () => {
  expect(extractSingleLineComments(FIXTURE_APP)).toMatchInlineSnapshot(`
    [
      {
        "type": "SingleLineComment",
        "value": "// this is a line comment",
      },
    ]
  `)
})

it('extractMultiLineComments', () => {
  expect(extractMultiLineComments(FIXTURE_APP)).toMatchInlineSnapshot(`
    [
      {
        "closed": true,
        "type": "MultiLineComment",
        "value": "/**
     * Create an instance of App with \`options\`.
     *
     * @param {Object} options
     * @api public
     */",
      },
      {
        "closed": true,
        "type": "MultiLineComment",
        "value": "/**
     * Set \`key\` on cache with the given \`value\`
     *
     * @param {String} \`key\`
     * @param {any} \`value\`
     * @api public
     */",
      },
      {
        "closed": true,
        "type": "MultiLineComment",
        "value": "/**
     * Get \`key\` from cache.
     *
     * @param {String} \`key\`
     * @api public
     */",
      },
      {
        "closed": true,
        "type": "MultiLineComment",
        "value": "/**
     * Delete \`key\` from cache
     *
     * @param {String} \`key\`
     * @param {any} value
     * @api public
     */",
      },
    ]
  `)
})
