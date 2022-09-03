let proxyObj = {}
proxyObj = {
  '/api': {
    ws: true,
    target: 'http://localhost:8081',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }
};

module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: proxyObj
  }
}