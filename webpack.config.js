const webpack = require('webpack');
const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    entry: {
        vender: './src/vender.js',
        index: './src/index.jsx'
    },
    output: {
        filename: "[name].[hash].js",
        chunkFilename: "[name].[hash].js",
        path: path.resolve('dist'),
        // publicPath: "ikmanager/dist"
    },
    // devtool: 'cheap-source-map',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.scss', '.jsx', '.css'],
        alias: {
            // "loash": "./node_modules/"
        },
        modules: ['node_modules', './src']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015',"react",'stage-0']
                    },
                }

            },

            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])

            },
            {
                test: /\.(jpg|png)$/,
                use: 'file-loader?name=[name].[hash].[ext]'
            },
        ]
    },
    plugins: [
        new htmlPlugin({
            title: 'welcome',
            template: 'src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({name: 'common'}),
        new ExtractTextPlugin('style.[name].css'),

    ],
}