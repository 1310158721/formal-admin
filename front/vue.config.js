module.exports = {
  publicPath: './',
  devServer: {
    before: function (app, server, compiler) {
      /* mock 接口 */
      app.get('/api/demo', (req, res) => {
        setTimeout(() => {
          res.send({
            data: 'something...'
          })
        }, 5000)
      })
    },
    proxy: {
      '/api': {
        /* 将来自 http://localhost:15000/api 的请求资源全部转发为 /api开头的请求 */
        target: 'http://localhost:15000/api',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/tools': {
        /* 将来自 http://localhost:20000/tools 的请求资源全部转发为 /tools开头的请求 */
        target: 'http://localhost:20000/tools',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/tools': ''
        }
      }
    }
  }
}
