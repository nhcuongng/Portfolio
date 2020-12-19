const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const autoprefixer = require('autoprefixer');


const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
		sourceMap: true,
		postcssOptions: {
			plugins: [
				autoprefixer()
			]
		}
  }
}

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  // The output property tells Webpack where to put our bundled code
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // resolve property allows us to specify which extensions Webpack will resolve
  resolve: {
    // use path alias (readme for detail)
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.(?:sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", postCSSLoader, "sass-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
          }
        ],
      },
  ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html" //source html
    }),
  ]
};