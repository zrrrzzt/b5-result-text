const test = require('ava')
const getDomain = require('../../lib/get-domain')

test('throws if missing options', t => {
  const expectedErrorMessage = 'Missing required input: options'
  const error = t.throws(() => {
    getDomain()
  }, Error)

  t.is(error.message, expectedErrorMessage)
})

test('throws if missing input.language', t => {
  const expectedErrorMessage = 'Missing required input: options.language'
  const error = t.throws(() => {
    getDomain({language: false})
  }, Error)

  t.is(error.message, expectedErrorMessage)
})

test('throws if missing input.domain', t => {
  const expectedErrorMessage = 'Missing required input: options.domain'
  const error = t.throws(() => {
    getDomain({language: 'en', domain: false})
  }, Error)

  t.is(error.message, expectedErrorMessage)
})

test('throws if non existent lang', t => {
  const expectedErrorMessage = 'Template not found'
  const error = t.throws(() => {
    getDomain({language: 'xx', domain: 'o'})
  }, Error)

  t.is(error.message, expectedErrorMessage)
})

test('returns empty for non existing domain', t => {
  const result = getDomain({language: 'en', domain: 'x'})
  t.falsy(result, 'result falsy ok')
})

test('returns expected result', t => {
  const expectedResult = require('../../lib/data/en/openness_to_experience')
  const result = getDomain({language: 'en', domain: 'o'})

  t.deepEqual(expectedResult, result, 'result ok')
})
