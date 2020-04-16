const path = require('path'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

let isDev = process.env.NODE_ENV === 'production'

module.exports = {
    context: path.resolve(__dirname, "src"),
    //mode: "development",
    entry: "./js/index.js",

    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.js', '.json', '.css', '.png', '.jpg'],
        // alias: {
        //     '@c': path.resolve(__dirname, '../../../../config')
        // }
    },

    devServer: {
        port: 9000,
        hot: isDev
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            options: {}
        }),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, 'assets'),
        //         to: path.resolve(__dirname, 'dist')
        //     }
        // ])
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: true,
                        reloadAll: true
                    }
                },
                'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};