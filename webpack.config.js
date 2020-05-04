const path = require('path')

module.exports = {
  entry: './lib/Jexl.js',
  output: {
    filename: 'jexl.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'jexl'
  },
  mode: 'production',
  optimization: {
    minimize: false
  },
  target: 'web'
}
