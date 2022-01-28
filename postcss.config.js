const postcssImport = require('postcss-import')
const postcssNested = require('postcss-nested')
const postcssSimpleVars = require('postcss-simple-vars')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const variablesFile = require('./src/styles/theme.js')

module.exports = ({ env }) => {
  const config = {}
  const Production = env === 'production'

  const cssnanoOpts = {
    preset: ['default', { discardComments: { removeAll: true } }]
  }

  config.plugins = [
    postcssImport(),
    postcssNested(),
    postcssSimpleVars({
      variables: variablesFile
    }),
    autoprefixer(),
    Production && cssnano(cssnanoOpts)
  ]

  return config
}
