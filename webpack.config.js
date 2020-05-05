const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './lib/Jexl.js',
  output: {
    filename: 'jexl-' + require('./package.json').version + '.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'jexl'
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true
        }
      })
    ]
  },
  target: 'web'
}
