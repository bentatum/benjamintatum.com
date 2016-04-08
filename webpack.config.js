const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const routes = [
    '/',
    '/better-react-spinkit/'
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
        preLoaders: [
            {
                test: /\.js$/,
                include: [
                    __dirname + '/src'
                ],
                loader: "eslint-loader"
            }
        ],
        loaders: [
            {
                //this tests for these specific node modules which are not transpiled already
                //and transpiles them for us
                test: /\/node_modules\/(joi\/lib\/|isemail\/lib\/|hoek\/lib\/|topo\/lib\/)/,
                loader: 'babel'
            },
            {
                test: /\.js$/,
                include: [
                    __dirname + '/src'
                ],
                loaders: ['babel']
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
            }
        ]
    },

    resolve: {
        moduleDirectories: [
            __dirname + '/src',
            __dirname + '/node_modules'
        ],
        extensions: ['', '.js', '.jsx', '.json']
    },

    node: {
        net : 'empty',
        tls : 'empty',
        crypto: 'empty',
        dns : 'empty'
    },

    plugins: [
        new ExtractTextPlugin('style.css'),
        new StaticSiteGeneratorPlugin('main', routes),
        new webpack.NormalModuleReplacementPlugin(/^(net|dns|crypto)$/, function(){ return {} }),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                "API_ENDPOINT": JSON.stringify(process.env.API_ENDPOINT),
                "DEVELOPMENT": true,
                "DEVTOOLS": true
            }
        }),
    ],

    eslint: {
        configFile: __dirname + '/.eslintrc'
    }
}
