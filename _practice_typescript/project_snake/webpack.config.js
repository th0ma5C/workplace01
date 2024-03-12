const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    optimization: {
        minimize: false // 关闭代码压缩，可选
    },

    entry: "./src/index.ts",

    devtool: "inline-source-map",
    mode: 'development',

    devServer: {
        static: {
            directory: './dist',
        },
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        environment: {
            arrowFunction: false,
            const: false // 关闭webpack的箭头函数、const，可选
        }
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        rules: [
            // TS規則
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        "targets": {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        "corejs": "3",
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        loader: "ts-loader",

                    }
                ],
                exclude: /node_modules/
            },
            // sass規則
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title: 'TS测试',
            template: "./src/index.html",
            // favicon: './src/favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename: "./css/[contenthash:8].bundle.css",
        }),
    ]

}