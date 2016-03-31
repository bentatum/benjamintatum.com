const CleanWebpackPlugin = require('clean-webpack-plugin')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

const routes = [ '/' ]

module.exports = {

    entry: {
        main: __dirname + '/src/index.js'
    },

    output: {
        filename: 'package.js',
        path: __dirname + '/dist',
        libraryTarget: 'umd'
    },

    module: {
        loaders: [{ 
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }]
    },

    resolve: {
        moduleDirectories: [
            'src',
            'node_modules'
        ],
        extensions: ['', '.js']
    },

    plugins: [
        new StaticSiteGeneratorPlugin('main', routes),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ]
}
