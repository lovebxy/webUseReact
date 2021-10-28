const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.join(__dirname,'/dist'))

module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'index.bundle.js'
    },
    devServer:{
        port:3010,

    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },{
                test:/\.less$/,
                use: [
                    {
                      loader: "style-loader",
                    },
                    {
                      loader: "css-loader",
                     
                    },
                    {
                      loader: "less-loader",
                      
                    },
                  ],
            }
        ]
    },
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         template:'./src/index.html'
    //     })
    // ]
}