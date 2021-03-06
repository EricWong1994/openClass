let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
// 加载Vue文件的插件
let VueLoaderPlugin = require('vue-loader/lib/plugin')
let CopyWebpackPlugin = require('copy-webpack-plugin');
let merge = require('webpack-merge');
let productionConfig = require('./webpack.prod.conf');
let developmentConfig = require('./webpack.dev.conf');
let moduleConfig = require('./webpack.module.conf');

let defaultConfig = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.join(__dirname, '../', 'dist'),
        filename: '[name].[hash:8].js'
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([
            {
                from:path.join(__dirname,'../','src/components'),
                to:'vue'
            }
        ])
    ],
}
module.exports = env => {
    let config = env === 'production'?productionConfig:developmentConfig;
    return merge(defaultConfig,moduleConfig,config)
}