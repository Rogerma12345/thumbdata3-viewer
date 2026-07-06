const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.ts",
    worker: "./src/worker.ts"
  },

  mode: "production",

  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"]
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      filename: "index.html",
      excludeChunks: ["worker"]
    })
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        use: "@webdiscus/pug-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"],
    fallback: {
      buffer: require.resolve("buffer/"),
      process: require.resolve("process/browser")
    }
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  },

  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].js",
    publicPath: "./",
    clean: {
      keep: /^(?:\.nojekyll|CNAME)$/
    }
  }
};