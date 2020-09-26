const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  entry: "./src/monaco.js",
  output: {
    path: __dirname + "/resources/public/monaco",
    filename: "main.js",
    publicPath: '/sandbox/dev/monaco/'
  },

  plugins: [
    new MonacoWebpackPlugin({
      languages: ['clojure']
    })
  ],

  optimization: {
    minimize: false
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/,
        use: ['file-loader']
      },
    ],
  },
};
