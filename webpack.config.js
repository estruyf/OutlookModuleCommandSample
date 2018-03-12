const webpack = require('webpack');
const pkg = require('./package.json');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
    entry: {
        bundle: './index.js'
    },
    output: {
        filename: 'bundle.js'
    },
    devtool: "#source-map",
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}

module.exports = config;