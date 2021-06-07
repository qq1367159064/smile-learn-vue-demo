const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "public",

  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("components", resolve("./src/components"))
      .set("assets", resolve("./src/assets"))
      .set("network", resolve("./src/network"))
      .set("views", resolve("./src/views"))
      .set("utils", resolve("./src/utils"))
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },

}