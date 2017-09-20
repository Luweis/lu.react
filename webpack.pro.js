const merge = require('webpack-merge');
import base from './webpack.config';
import webpack from 'webpack';
const uglifyjsplug = require("uglifyjs-webpack-plugin");


module.exports = merge(base, {
    devtool: 'cheap-module-source-map',

    plugins:[
        new webpack.DefinePlug({
            'process.env.NODE_EVN':'prodycution'
        }),
        new uglifyjsplug()
    ]
})