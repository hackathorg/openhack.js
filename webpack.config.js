'use strict'

var path = require('path')

// var ngAnnotatePlugin = require('ng-annotate-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './app.js',
  output: {
    path: path.join(__dirname, './bundle'),
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components|lib)/,
      loader: 'babel?presets[]=es2015&presets[]=stage-1'
    }, {
      test: /(.*)\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'url-loader'
    }, { 
      test: /\.tsx?$/, 
      loader: 'ts-loader' 
    }]
  },
  resolve: {
    modulesDirectories: ['bower_components', 'node_modules'],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  plugins: [
    // new ngAnnotatePlugin({
    //   add: true,
    //   // other ng-annotate options here
    // })
  ]
}
