var webpack = require('webpack'); 
module.exports = { 
  entry: './src/index.js', 
  output: { 
    path: __dirname + '/public/', 
    filename: 'bundle.js' 
  }, 
  devServer: { 
    hot: true,
    inline: true,
    port: 4000,
    contentBase: __dirname + '/public/',
  }, 
  module: { 
    loaders: [ 
      { 
        test: /\.js$/, 
        loaders: [
          'react-hot-loader', 
          'babel-loader'
        ], 
        exclude: /node_modules/ 
      } 
    ] 
  }, 
  plugins: [ new webpack.HotModuleReplacementPlugin() ] 
}