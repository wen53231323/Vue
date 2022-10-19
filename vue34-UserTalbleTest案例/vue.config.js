module.exports = {
  devServer: {
    host: '0.0.0.0', // 默认是 localhost,可不配置
    port: 3000,// 修改 dev 期间的端口号
    open: true,// 自动打开浏览器
    // 当前项目在开发调试阶段，会将任何未知请求 (没有匹配到静态文件的请求) 代理到https://www.escook.cn
    proxy: {
      '/api': { // 被代理的接口名
        target: 'http://localhost:8888', // url地址
        changeOrigin: true, // 发送请求头中 host 是否设置成 target
        pathRewrite: { // 重定向
          '^/api': ''
        }
      }
    },
  }
}