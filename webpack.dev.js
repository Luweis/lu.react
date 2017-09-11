const merge = require('webpack-merge');
const base  = require('./webpack.config');
const webpack = require("webpack");
const path = require("path");

module.exports = merge(base,{
    devServer: {
        contentBase: './src',
        port:9001,
    },

});