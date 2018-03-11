const test = require('ava')
const getFacet = require('../../lib/get-facet')

test('throws if missing options', t => {
  const expectedErrorMessage = 'Missing required input: options'
  const error = t.throws(() => {
    getFacet()
  }, Error)

  t.is(error.message, expectedErrorMessage)
})

test('throws if missing input.language', t => {
  const expectedErrorMessage = 'Missing required input: options.language'
  const error = t.throws(() => {
    getFacet({language: false})
  }, Error)

  t.is(error.message, expectedErrorMessage)
})

test('throws if missing input.domain', t => {
  const expectedErrorMessage = 'Missing required input: options.domain'
  const error = t.throws(() => {
    getFacet({language: 'en', domain: false})
  }, Error)

  t.is(error.message, expectedErrorMessage)
})

test('throws if missing input.facet', t => {
  const expectedErrorMessage = 'Missing required input: options.facet'
  const error = t.throws(() => {
    getFacet({language: 'en', domain: 'o', facet: false})
  }, Error)

  t.is(error.message, expectedErrorMessage)
})

test('throws if non existent lang', t => {
  const expectedErrorMessage = 'Template not found'
  const error = t.throws(() => {
    getFacet({language: 'xx', domain: 'o', facet: 1})
  }, Error)

  t.is(error.message, expectedErrorMessage)
})

test('throws if non existent domain', t => {
  const expectedErrorMessage = 'Domain not found'
  const error = t.throws(() => {
    getFacet({language: 'en', domain: 'x', facet: 1})
  }, Error)

  t.is(error.message, expectedErrorMessage)
})

test('returns empty for non existing facet', t => {
  const result = getFacet({language: 'en', domain: 'o', facet: 'x'})
  t.falsy(result, 'result falsy ok')
})

test('returns expected result', t => {
  const expectedResult = require('../data/en-a-6.json')
  const result = getFacet({language: 'en', domain: 'a', facet: '6'})
  t.deepEqual(expectedResult, result, 'result ok')
})
