const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  context: path.resolve(__dirname),
  entry: ['./src/main.js'],
  mode: process.env.NODE_ENV || 'development',
  externals: {
    Vue: 'Vue'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //   prettify: false,
        //   productionMode: true,
        //   compilerOptions: { preserveWhitespace: false },
        // }
      },

      // webpack >= 2 multiple loaders
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src/icons'),
        use: [
          // { loader: 'svg-sprite-loader', options: {} },
          'svg-sprite-loader',
          // 'svg-transform-loader',
          'svgo-loader'
        ]
      }
    ],
  },

  plugins: [
    // vue loader plugin, required
    new VueLoaderPlugin(),
  ]
}