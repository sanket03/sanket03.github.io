const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src/scripts");

const config = {
    entry: SRC_DIR + "/utilities/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [{        
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /.css$/,
                use: ExtractTextPlugin.extract({
                        use: ["css-loader",'sass-loader']               
                     })
            }]
    },
    plugins: [
        // new CleanWebpackPlugin([DIST_DIR + '/app']),
        new ExtractTextPlugin({
            filename: "bundle.css",
            disable: false,
            allChunks: true
         }),
        //  new HtmlWebpackPlugin()
        ]
};

module.exports = config;