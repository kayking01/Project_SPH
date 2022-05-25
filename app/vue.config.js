const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //指定host和端口
  devServer: { host: 'localhost', port: 8080},
  //关闭 eslint
  lintOnSave:false
})
