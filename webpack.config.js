
const path = require('path')
const webpack = require('webpack')
const SitemapPlugin = require('sitemap-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const localStylesQuery = 'sourceMap&localIdentName=[path][name]---[local]---[hash:base64:5]'

const routes = [
  '/',
  '/work',
  '/work/costimize',
  '/work/skipstone',
  '/work/better-react-spinkit',
  '/contact',
  '/blog'
]

module.exports = {

  devtool: 'source-map',

  entry: {
    main: path.resolve('./src/index.js')
  },

  output: {
    filename: 'package.js',
    path: path.resolve('./dist'),
    libraryTarget: 'umd'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: path.resolve('./src'),
        loader: 'standard'
      }
    ],
    loaders: [
      {
        // this tests for these specific node modules which are not transpiled already
        // and transpiles them for us
        test: /\/node_modules\/(joi\/lib\/|isemail\/lib\/|hoek\/lib\/|topo\/lib\/)/,
        loader: 'babel'
      },
      {
        test: /\.js$/,
        include: path.resolve('./src'),
        loaders: ['babel']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(`css?module&${localStylesQuery}!sass?module&${localStylesQuery}`)
      },
      {
        test: /\.json$/,
        include: path.resolve('./src'),
        loader: 'json-loader'
      },
      { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=[name].[ext]' },
      { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=[name].[ext]' },
      { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=[name].[ext]' },
      { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]' },
      { test: /\.md$/, loader: 'html!markdown' }
    ]
  },

  resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    modulesDirectories: [
      'src',
      'src/components',
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.md']
  },

  node: {
    net: 'empty',
    tls: 'empty',
    crypto: 'empty',
    dns: 'empty'
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new StaticSiteGeneratorPlugin('main', routes),
    new CompressionPlugin(),
    new SitemapPlugin('http://benjamintatum.com', routes, 'sitemap.xml'),
    new webpack.NormalModuleReplacementPlugin(/^(net|dns|crypto)$/, function () { return {} }),
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'API_ENDPOINT': JSON.stringify(process.env.API_ENDPOINT),
        'DEVELOPMENT': JSON.stringify(process.env.DEVELOPMENT),
        'DEVTOOLS': JSON.stringify(process.env.DEVTOOLS),
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'SEGMENT_KEY': JSON.stringify(process.env.SEGMENT_KEY),
        REDUX_PREFIX: JSON.stringify(process.env.REDUX_PREFIX)
      }
    })
  ]
}
