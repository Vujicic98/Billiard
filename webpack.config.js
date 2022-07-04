const  MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development"

//if (process.env.SET_NODE_ENV === "production"){   mode = "production";}

 

module.exports = {
    mode: mode,

    output: {
        assetModuleFilename: "images/[hash][ext][query]"
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024,
                    }
                }
            },
            {
              test: /\.css$/i,
              use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                        options: {publicPath: ""},
                    },
                    "css-loader"
                ], 
            },
            {
                test: /\.(ts|js)x?$/,
                use: ['babel-loader','ts-loader'],
                exclude: /node_modules/,
            } , 
        ],
    },

    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: [".js",".jsx",".ts",".tsx",".json"]
    },

    devtool: "source-map",
    devServer: {
        open: true,
        static: "./dist",
        hot: true,
    }
}