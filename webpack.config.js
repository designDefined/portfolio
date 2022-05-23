const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devtool: "inline-source-map",
    devServer: {
        static: './dist',
        hot:true,
    },
    plugins: [new HTMLWebpackPlugin({title:"Development"}), new CleanWebpackPlugin()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module:{
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test:/\.css$/i,
                use:["style-loader", "css-loader"]
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
        ]
    }
};