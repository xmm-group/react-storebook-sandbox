const path = require('path')

module.exports = ({ config }) => {
  config.resolve.modules = [
    path.resolve(__dirname, '..', 'src'),
    "node_modules",
  ]
  config.resolve.alias = {
    "common": path.resolve(__dirname, '..', 'src', '_common'),
    "themes": path.resolve(__dirname, '..', 'src', 'themes'),
  }
  return config
}
