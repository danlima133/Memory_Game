const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './static/javascript/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    },
    
    mode: 'development',
    
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ],

    devServer: {
        port: 3000,
        open: false,
        static: {
            directory: path.join(__dirname, 'static')
        }
    }
}