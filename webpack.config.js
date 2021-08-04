const path = require('path')

module.exports = {
    entry: "./frontend/src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{loader: 'babel-loader'},
            },
            {
                test: /\.css$/,
                loader: "css-loader"
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'frontend/static/frontend/'),
        filename: 'bundle.js'
    },
}
