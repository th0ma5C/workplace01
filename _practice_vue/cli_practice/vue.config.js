module.exports = {
  transpileDependencies: true,
  // 開啟代理服務器方式一
  // devServer: {
  //   proxy: 'https://api.namefake.com/'
  // },
  // 開啟方式二
  devServer: {
    proxy: {
      '/api': { //匹配所有以'/api'開頭的請求路徑
        target: 'https://api.namefake.com/', //代理目標的基礎路徑
        pathRewrite: { '^/api': '' },
        ws: true, //用於支持websocket
        changeOrigin: true
        // 用於控制請求頭中的host值，為true時服務器收到的請求頭為:5000，為false時則收到:8080
      },
      '/api2': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/api2': '' },
        ws: true,
        changeOrigin: true
      }
    },
  }
}