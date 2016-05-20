var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3332',
    'webpack/hot/only-dev-server',
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
    { test: /\.jsx$/, loaders: ['react-hot', 'babel'] },
    { test: /\.(html)$/, loader: 'file?name=[name].[ext]'},
    { test: /\.(json)$/, loader: 'json'},
    { test: /\.(csv)$/, loader: 'dsv'},
    { test: /\.css/, loader: "style!css"},
    { test: /\.less/, loader: "style!css!less"},
    { test: /\.(gif|png|jpg|svg)$/, loader: 'url?name=img/[name].[ext]'}
    ]
  }
};

