let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
// 加载Vue文件的插件
let VueLoaderPlugin = require('vue-loader/lib/plugin')
let CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.join(__dirname, '../', 'dist'),
        // filename:'[name].js'
        filename: '[name].[hash:8].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                use: [{
                    loader:'url-loader',
                    options:{
                        // 通过`limit`指定进行base64编码的图片大小；只有小于指定字节（byte）的图片才会进行base64编码：
                        limit:10000,
                        outputPath:'static/images'
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader:'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]'
                }
            } 
        ]
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
    devServer: {
        host: 'localhost',
        port: '7000',
        open: true,
        hot: true
    }
}