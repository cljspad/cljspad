const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  entry: "./resources/public/cljsfiddle/index.js",
  output: {
    path: __dirname + "/resources/public/cljsfiddle",
    filename: "main.js"
  },

  plugins: [
    new MonacoWebpackPlugin({
      // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
      languages: ['json']
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
