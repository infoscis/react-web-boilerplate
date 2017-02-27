var webpack = require('webpack'); 
var path = require('path');
module.exports = { 
  entry: [
    './src/index.js'
  ],
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
          loaders: ['react-hot-loader', 'babel-loader'],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'  // use ! to chain loaders
        },
        {
          test: /\.scss$/, 
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.css$/, 
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.(png|jpg)$/, 
          loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
        } 
      ]
  }, 
  plugins: [ new webpack.HotModuleReplacementPlugin() ] 
}