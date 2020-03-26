const path = require('path'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, "src"),
    //mode: "development",
    entry: "./index.js",

    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
};