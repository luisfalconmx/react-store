const postcssImport = require('postcss-import')
const postcssNested = require('postcss-nested')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = ({ env }) => {
  const config = {}
  const Production = env === 'production'

  const cssnanoOpts = {
    preset: ['default', { discardComments: { removeAll: true } }]
  }

  config.plugins = [
    postcssImport(),
    postcssNested(),
    autoprefixer(),
    Production && cssnano(cssnanoOpts)
  ]

  return config
}
