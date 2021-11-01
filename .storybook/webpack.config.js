const path = require('path')

module.exports = ({ config }) => {
  config.resolve.modules = [
    path.resolve(__dirname, '..', 'src'),
    "node_modules",
  ]
  config.resolve.alias = {
    _common: path.resolve(__dirname, '..', 'src', '_common'),
    layouts: path.resolve(__dirname, '..', 'src', 'layouts'),
  }
  return config
}
