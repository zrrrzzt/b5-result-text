module.exports = lang => {
  try {
    const template = require(`./data/${lang}`)
    return template
  } catch (error) {
    return false
  }
}
