var path = require('path');
var webpack = require('webpack');
var config = {
  cache: true,
  debug: true,
  devtool: 'cheap-eval-source-map',

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    'script!jquery/dist/jquery.min.js',
    path.resolve(__dirname, 'src', 'index.js'),
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: 'src/styles/app.css',
      bootstrap: 'bootstrap/dist/css/bootstrap.css',
      gramventures: './components/layout/Gramventures.js',
      signin: './components/layout/SignIn.js',
      layout: './pages/layout.js',
      profile: './components/layout/Profile.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(woff|woff2|eot|ttf|svg)$/,loader: "url"},
      {
        test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
        loaders: ['react-hot','babel'], // The module to load. "babel" is short for "babel-loader"
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  stats: {
    colors: true,
    reasons: true
  }
};

module.exports = config;