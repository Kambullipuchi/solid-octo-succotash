
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = require("frontend.build/default-webpack.prod.config.js")(webpack, HtmlWebpackPlugin, ExtractTextPlugin);

config.entry.styles = "./source/style.scss";
config.entry.app = ["bootstrap-sass", "angular", "./source/index.ts"];

module.exports = config;
