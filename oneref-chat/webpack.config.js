// webpack.config.js

var webpack = require('webpack');


module.exports = {
    entry: {
      chat: "./js/app.js"
    },
    output: {
        path: "./build/",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, 
              exclude: /node_modules/, 
              loader: "babel-loader",               
              query: {
                presets:['es2015','react']
              }
            },
            { test: /\.(json)$/, loader: "json-loader" }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".json"]
    }
};