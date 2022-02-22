const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve('./dist') ,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/ ,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpeg|gif|svg)$/ ,
                loader: 'url-loader',
                options: {
                    publicPath: './dist/',
                    name: '[name].[ext]?[hash]',
                    limit: 20000

                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `
                Build Date : ${ new Date().toLocaleDateString()}
            `
        })
    ]

}