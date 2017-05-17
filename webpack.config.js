const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const bootstrapEntryPoints = require('./webpack.bootstrap.config');

//Dev mode bootstrap
const BootstrapConfig = bootstrapEntryPoints.prod;

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: {
        app: SRC_DIR + "/app/index.js",
        bootstrap: BootstrapConfig
    },
    output: {
        path: DIST_DIR + "/app",
        filename: "[name].js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test:  /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: SRC_DIR,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015", "react", "stage-2"]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract({fallback: 'style-loader',
                    use:['css-loader', 'saas-loader']})
                //use: ['style-loader','css-loader?sourceMap','sass-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
            },
            {
                test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
                loader: 'imports-loader?jQuery=jquery'
            },
            {
                test: /\.(woff2?|svg)$/,
                loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
            },
            {
                test: /\.(ttf|eot)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist/app"),
        compress: true,
        hot: true,
        open: true,
        inline: true,
        stats: 'errors-only'
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: SRC_DIR + "/index.html"
    }),
    new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'})
    ]
};
