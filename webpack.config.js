const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename : 'app.bundle.js'
    },    

    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
        ]
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },

    plugins: [
        new CopyWebpackPlugin([
          {
            from: path.resolve(__dirname, 'index.html'),
            to: path.resolve(__dirname, 'dist')
          },
          {
            from: path.resolve(__dirname, 'assets', '**', '*'),
            to: path.resolve(__dirname, 'dist')
          }
        ]),
        new webpack.DefinePlugin({
          'typeof CANVAS_RENDERER': JSON.stringify(true),
          'typeof WEBGL_RENDERER': JSON.stringify(true)
        }),
      ],  
      
      mode: 'development',
};