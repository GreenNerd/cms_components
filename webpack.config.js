var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
        publicPath: "/assets/"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: "style!css!postcss-loader!sass"},
            { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192"}
        ]
    },
    postcss: [ autoprefixer({ browsers: ['Chrome > 1','Firefox > 15','iOS > 5','Android > 2.3'] }) ],
    resolve:{

    }
};