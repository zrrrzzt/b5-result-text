const test = require('ava')
const { getTemplate } = require('../../index')
const expectedTemplate = require('../data/get-template-no.json')

test('it returns template for en as default', t => {
  t.truthy(getTemplate(), 'en ok')
})

test('it returns template for en', t => {
  t.truthy(getTemplate('en'), 'en ok')
})

test('it returns template for no', t => {
  t.truthy(getTemplate('no'), 'no ok')
})

test('it returns expected template for no', t => {
  t.deepEqual(getTemplate('no'), expectedTemplate, 'no ok')
})

test('it returns false for xx', t => {
  t.falsy(getTemplate('xx'), 'no xx found')
})
