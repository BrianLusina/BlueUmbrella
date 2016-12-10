
const path = require("path");

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
                loader: "styel!css",
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
    }
    
};