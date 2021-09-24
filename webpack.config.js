const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry : path.join(__dirname, 'src', 'index.js'),
    output: {
        path:path.resolve(__dirname, 'dist'),

    },
    module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      //Babel config to import CSS files
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      //Babel config to import imgs
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      //Babel config to import SVG
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
        }),
    ],

}