const path = require('path')

function pathHandler(pathUrl) {
    return path.join(__dirname, pathUrl)
}

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', pathHandler('./src'))
            .set('Api', pathHandler('./src/api'))
            .set('Assets', pathHandler('./src/assets'))
            .set('Comp', pathHandler('./src/components'))
            .set('Pages', pathHandler('./src/pages'))
            .set('Router', pathHandler('./src/router'))
            .set('Store', pathHandler('./src/store'))
            .set('Utils', pathHandler('./src/utils'))
    },
    devServer: {
        open: true,
        proxy: {
            // http://jx.xuzhixiang.top/ap/api/bannerlist.php?uid=227
            // 标识符: 配置项
            '/ap': {
                target: 'http://jx.xuzhixiang.top',
                changeOrigin: true,
            }
        }
    }
}
``