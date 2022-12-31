const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 關閉語法檢查
  //開啟代理服務器（方式一）
  // devServer: {
  //   proxy: 'http://127.0.0.1:5000'
  // },
  //開啟代理服务器（方式二）
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://127.0.0.1:5000',
        pathRewrite: { '^/atguigu': '' },
        // ws: true, //用于支持 websocket
        // changeOrigin: true //用于控制請求頭中的 host 值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' },
        // ws: true, //用于支持 websocket
        // changeOrigin: true //用于控制請頭中的 host 值
      }
    }
  }
})
