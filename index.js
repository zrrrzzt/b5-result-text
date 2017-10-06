'use strict'

const getTemplate = require('./lib/get-template')
const generateResult = require('./lib/generate-result')

module.exports = data => {
  if (!data) {
    throw new Error('Missing required input')
  }

  const template = getTemplate(data.lang || 'en')

  if (!data.scores) {
    throw new Error('Missing required input data.scores')
  }

  if (!template) {
    throw new Error('Template not found. Try another data.lang input.')
  }

  return generateResult(data.scores, template)
}
