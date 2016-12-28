const HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + "/index.html",
    filename:"index.html",
    inject:"body"
});

const path = require("path");
const webpack = require("webpack");

module.exports = {
    devtool: "eval",
    entry: __dirname + "/src/index.js",
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, "src"),
                loader: "babel-loader"
            },
            
            {
                test: /\.css$/,
                loader: "style!css",
                include: path.join(__dirname, "src", "styles")
            },
            
            {
                test:/\.png$/,
                loader:"file",
            },
            
            {
                test:/\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader:"file"
            }
        ]
    },
    
    output:{
        filename: "bundle.js",
        publicPath:"/build/",
        path:path.join(__dirname + "build")
    },
    
    plugins:[
        HTMLWebpackPluginConfig,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
    
};