const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');
const {PORT, HOST} = require('./config');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');
module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        host: HOST,
        port: PORT,
        open: true,
        hot: true,
        quiet: true,
        stats: 'errors-only', // 终端仅打印 error
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 热更新
        new FriendlyErrorsWebpackPlugin({ // 终端显示
            compilationSuccessInfo: {
                messages: [`You application is running here http://${HOST}:${PORT}`]
            }
        })
    ]
})

