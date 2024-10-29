const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "docs")
    },

    module: {
        rules: [
            {
                test: /\.png$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    
    mode: 'development',
    
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html'
        })
    ],

    devServer: {
        port: 3000,
        open: false
    }
}