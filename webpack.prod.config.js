const webpack = require("webpack");
const path = require("path")

module.exports = {
    devtool: "source-map",
    entry: __dirname + "/src/index.js",
    output:{
        path: path.join(__dirname, "build"),
        filename : "bundle.js",
        publicPath: "/build/"
    },
    plugins:[
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize:true,
            compress:{
                warnings:false
            }
        }),
        new webpack.DefinePlugin({
            "process.env":{
                "NODE_ENV":JSON.stringify("production")
            }
        })
    ],
    module:{
        loaders:[
            {
                test: /\.js?$/,
                include:path.join(__dirname, "src"),
                loader:"babel-loader"
            },
            {
                test: /\.css?$/,
                loader:"style!css",
                include: path.join(__dirname, "src", "styles")
            },
            
            { 
                test: /\.png$/,
                loader: 'file' 
            },
            
            { 
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file'
            }
        ]
    }
    
}