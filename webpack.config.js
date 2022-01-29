// Require dependencies
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Critters = require('critters-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBar = require('webpackbar')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const AnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Dotenv = require('dotenv-webpack')

module.exports = (env, argv) => {
  const config = {}

  // Detect webpack mode
  const Development = argv.mode === 'development'
  const Production = argv.mode === 'production'
  const Analyze = argv.env.analyze === true

  // Get enviroment variables from .env file
  require('dotenv').config()
  const { HOST, PORT } = process.env

  config.entry = {
    app: {
      import: './src/index.js'
    }
  }

  config.output = {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext]'
  }

  config.resolve = {
    extensions: ['.js', '.jsx'],
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@utils': path.resolve(__dirname, 'src/utils/')
    }
  }

  // Compatibility for browserslist
  config.target = Production ? 'browserslist' : 'web'

  // Enable sourcemaps for production and development
  config.devtool = Production ? 'source-map' : 'eval'

  // Enable webpack dev server in development mode
  if (Development) {
    config.devServer = {
      host: HOST,
      port: PORT || 3000,
      static: path.join(__dirname, 'dist'),
      compress: true,
      historyApiFallback: true
    }
  }

  config.module = {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.md$/,
        type: 'asset/source'
      },
      {
        test: /\.(css|pcss|sss)$/i,
        use: [
          Production ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[contenthash].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[contenthash].[ext]'
        }
      }
    ]
  }

  // Enable webpack plugins
  config.plugins = [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      filename: 'index.html',
      inject: true
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),

    new Critters(),

    new CleanWebpackPlugin(),

    new Dotenv(),

    new WebpackBar()
  ]

  // Enable AnalyzerPlugin only in development mode
  if (Analyze) {
    config.plugins.push(
      new AnalyzerPlugin({
        analyzerMode: Analyze ? 'server' : 'disabled',
        openAnalyzer: Analyze
      })
    )
  }

  // Enable optimizations in production mode
  if (Production) {
    config.optimization = {
      minimize: true,
      splitChunks: {
        chunks: 'all'
      },
      minimizer: [
        new TerserWebpackPlugin(),
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.squooshMinify,
            options: {
              encodeOptions: {
                mozjpeg: {
                  quality: 100
                },
                webp: {
                  lossless: 1
                },
                avif: {
                  cqLevel: 0
                }
              }
            }
          },
          generator: [
            {
              // You can apply generator using `?as=webp`, you can use any name and provide more options
              preset: 'webp',
              implementation: ImageMinimizerPlugin.squooshGenerate,
              options: {
                encodeOptions: {
                  webp: {
                    quality: 90
                  }
                }
              }
            }
          ]
        })
      ]
    }
  }

  return config
}
