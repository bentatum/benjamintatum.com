const CleanWebpackPlugin = require('clean-webpack-plugin')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const routes = [
    '/'
    // '/contact'
]

module.exports = {

    devtool: 'source-map',

    entry: {
        main: __dirname + '/src/index.js'
    },

    output: {
        filename: 'package.js',
        path: __dirname + '/dist',
        libraryTarget: 'umd'
    },

    module: {
        loaders: [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
            }
        ]
    },

    resolve: {
        moduleDirectories: [
            'src',
            'node_modules'
        ],
        extensions: ['', '.js']
    },

    plugins: [
        new ExtractTextPlugin('style.css'),
        new StaticSiteGeneratorPlugin('main', routes),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ]
}
