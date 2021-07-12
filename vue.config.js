module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4001',
        changeOrigin: true, //支持跨域
        pathRewrite: {
          '^/api': ''
        }
      },
      '/gh': {
        target: 'https://api.github.com', //目标地址
        pathRewrite: {
          '^/gh': '' //去除路径前的gh
        },
        changeOrigin: true //支持跨域，当域名，协议不同时，必须开启
      }
    }
  }
}
