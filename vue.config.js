module.exports = {
  // chainWebpack: config => {
  //   config
  //     .plugin('html')
  //     .tap(args => {
  //       return [/* new args to pass to html-webpack-plugin's constructor */]
  //     })
  // },

  // postLoaders: {
  //   html: 'babel-loader'
  // },

  transpileDependencies: [
    'vuetify'
  ]
}
