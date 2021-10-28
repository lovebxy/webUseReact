const path = require('path')

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
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                    ]
            }
        ]
    }
}