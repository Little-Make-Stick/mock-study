const path = require('path')
const apiMocker = require('webpack-api-mocker')

module.exports = {
    publicPath: './', //输出的根路径  默认是/ 如果你的网站是app.com/vue 这更改此配置项
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /.mjs$/,
                    include: /node_modules/,
                    type: 'javascript/auto',
                },
                {
                    test: /\.md$/,
                    // use: [{ loader: 'html-loader' }, { loader: 'markdown-loader', options: {} }],
                    use: ['text-loader'],
                },
            ],
        },
    },
    devServer: {
        // before: require('./src/mock'),
        before(app) {
            // 注意，此处引用的是自定义的接口文件
            apiMocker(app, path.resolve('./src/mock/index.js'), {
                proxy: {
                    '/repos/*': 'https://api.github.com/',
                },
                changeHost: true,
            })
        },
        proxy: {
            '/api': {
                //目标服务器,代理访问到http://localhost:8888
                target: 'http://150.158.93.94:8082',
                changOrigin: true, //开启代理
                pathRewrite: {
                    '^/api': '',
                },
            },
            '/api': {
                //目标服务器,代理访问到http://localhost:8888
                target: 'ws://150.158.93.94:8082',
                changOrigin: true, //开启代理
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
    lintOnSave: false,
}
