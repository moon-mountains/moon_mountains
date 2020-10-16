module.exports = {
  publicPath: "./",
  // baseUrl: "./",
  outputDir: process.env.outputDir, 
  configureWebpack: {
    devtool: 'source-map'
  }
}