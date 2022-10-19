module.exports = {
    devServer: {
        // devServer.proxy 提供的代理功能，仅在开发调试阶段生效
        // 项目上线发布时，依旧需要 API 接口服务器开启 CORS 跨域资源共享
        proxy: "https://www.baidu.com"// 需要代理的域名
    }
}