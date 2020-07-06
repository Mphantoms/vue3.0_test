module.exports = {
    proxy: {
      // string shorthand
    //   '/foo': 'http://localhost:4567/foo',
      // with options
      '/api': {
        target: 'https://www.dongtu.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }