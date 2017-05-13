const webpack = require('webpack');
const path = require('path');

const getConfig = (env = {}) => {
  const isProduction = env.production === true;

  return {
    entry: {
      main: [
        path.join(__dirname, '/src/app/index.jsx'),
      ],
    },
    output: {
      path: path.join(__dirname, '/src/www/dist'),
      publicPath: '/dist/',
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
          ],
        },
        {
          test: /\.(png|gif|jpg)$/,
          loader: 'url-loader',
          options: { limit: '25000' },
        },
        {
          test: /\.(ttf|eot|svg)$/,
          loader: 'file-loader',
        },
      ],
    },
    plugins: (() => {
      let plugins;
      if (isProduction) {
        plugins = [
          // Allow React to strip out unnecessary checks
          new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production'),
            },
          }),
          // Minification
          new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
          }),
          // Allows error warnings but does not stop compiling.
          new webpack.NoEmitOnErrorsPlugin(),
        ];
      }
      else {
        plugins = [
          // Allow hot reloading of modules
          new webpack.HotModuleReplacementPlugin(),
          // Allows error warnings but does not stop compiling.
          new webpack.NoEmitOnErrorsPlugin(),
        ];
      }

      return plugins;
    })(),
    devServer: {
      contentBase: 'src/www',
      hot: true,
      inline: true,
      port: 8000,
      host: 'localhost',
    },
  };
};

module.exports = getConfig();
