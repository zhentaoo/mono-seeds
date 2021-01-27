module.exports = {
  configureWebpack: {
    devServer: {
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': 'http://localhost:8080',
      },
    }
  }
}