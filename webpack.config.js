const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const sandboxVersion = process.env.SANDBOX_VERSION;
const publicPath = "/sandbox/" + sandboxVersion + "/monaco/";

module.exports = {
  entry: "./src/monaco.js",
  output: {
    path: __dirname + "/resources/public/monaco",
    filename: "main.js",
    publicPath: publicPath
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
