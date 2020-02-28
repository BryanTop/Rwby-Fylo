var HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
              'url-loader?limit=10000',
              'img-loader'
            ]
          },
          {
              test: /\.sass$/,
              use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
              ]
          }
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    }),
    new miniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    })        
]
  };

  // for images
  // options: {
 //   esModule: false
 // }

  // npm install --save-dev html-webpack-plugin
  //npm install --save-dev html-loader
  // npm install webpack webpack-cli --save-dev
  // npm install -D babel-loader @babel/core @babel/preset-env
  // npm i -D file-loader
  // npm i -D sass-loader node-sass style-loader css-loader mini-css-extract-plugin

  // npm i -D webpack-dev-server