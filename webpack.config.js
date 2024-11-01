const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cssMiniExtractPlugin = require('mini-css-extract-plugin')

const env = process.env.NODE_ENV

module.exports = {
    mode: env,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "docs")
    },
    module: {
        rules: [
            {
                test: /\.png$/,
                type: 'asset/resource'
            },
            {
                test: /\.(css|module\.css)$/,
                use: [env === 'production' ? cssMiniExtractPlugin.loader : 'style-loader']
            },
            {
                test: /^(?!.*\.module\.css$).*\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.module\.css$/,
                loader: 'css-loader',
                options: {
                    modules: {
                        mode: 'global'
                    }
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            title: 'Memory Game'
        }),
        new htmlWebpackPlugin({
            filename: '404.html',
            template: './static/html/404.html',
            inject: false
        }),
        new cssMiniExtractPlugin({
            filename: 'style.css'
        })
    ],
    resolve: {
        alias: {
            '@modules': path.resolve(__dirname, 'src/modules'),
            '@components': path.resolve(__dirname, 'components'),
            '@static': path.resolve(__dirname, 'static'),
            '@HTMLelements': path.resolve(__dirname, 'src/modules/HTMLelements.js')
        }
    },
    devServer: {
        port: 3000,
        open: false,
        historyApiFallback: {
            rewrites: [
                { from: /(\w+|\/)+/, to: '/404.html' }
            ]
        }
    }
}