const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackBundleAnalyzer = require('webpack-bundle-analyzer')
const CompressionPlugin = require('compression-webpack-plugin')

process.env.NODE_ENV = 'production'

module.exports = {
  mode: 'production',
  target: 'web',
  devtool: 'source-map', // so that we can see the source code when debugging
  entry: './src/index', //default value
  output: {
    //webpack dev uses memory but we need to specify this anyway
    path: path.resolve(__dirname, 'build'),
    publicPath: '/comprar/',
    filename: '[name].[contentHash].js',
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    // Webpack will automatically display a report of what's in our bundle when the build is completed
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    // Users would only need to reload this file when it changes.
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css',
    }),
    new webpack.DefinePlugin({
      // This global makes sure React is built in prod mode.
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.API_HOST': JSON.stringify('https://www.minisuper.com.mx/customer_api'),
      'process.env.SOCKET_HOST': JSON.stringify('https://www.minisuper.com.mx'),
      'process.env.SUBDIR': JSON.stringify('/comprar'),
    }),
    // It adds reference to the js bundles into the index.html file
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      // To keep our html as small as possible
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  module: {
    //to tell webpack what files we want to handle
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'], //to run babel on these files
      },
      {
        test: /(\.css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
}
