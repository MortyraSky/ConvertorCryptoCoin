const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
// const isDev = true;
const isProd = !isDev;
const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);
console.log('IS DEV', isDev, path.resolve(__dirname, './favicon.ico'));

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
    ];
  }

  return config;
};

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true,
      },
    },
    'css-loader',
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const getPlugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: './index.html',
      alwaysWriteToDisk: true,
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    // new HtmlWebpackHarddiskPlugin(),
    // (
    //   (isProd)
    //     ? new CleanWebpackPlugin() : () => { }
    // ),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist') },
      ],
    }),
    // new MiniCssExtractPlugin({
    //   filename: filename('css'),
    //   path: path.resolve(__dirname, 'dist'),
    // }),
  ];

  if (isProd) {
    base.push(new BundleAnalyzerPlugin());
  }

  return base;
};

const babelOptions = (preset) => {
  const options = {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties'],
  };

  if (preset) {
    options.presets.push(preset);
  }
  return options;
};

const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: babelOptions('@babel/preset-typescript'),
  }];

  if (isDev) {
    loaders.push('eslint-loader');
  }

  return loaders;
};

module.exports = () => ({
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['@babel/polyfill', './index.tsx'],
  },

  devtool: isDev ? 'source-map' : '',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.xml', '.png', '.jpg', 'css', 'less', 'sass', 'scss'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename('js'),
    // filename: 'bundle.js',
  },

  optimization: optimization(),

  devServer: {
    port: 4200,
    hot: isDev,
    overlay: true,
    contentBase: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: 'ts-loader',
      },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: cssLoaders(),
      // },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        exclude: '/node_modules/',
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: cssLoaders('less-loader'),
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-modules-typescript-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProd
                  ? '[hash:base64]'
                  : '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // eslint-disable-next-line global-require
              implementation: require('sass'),
            },
          },
          // {
          //   loader: 'resolve-url-loader',
          // },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
      {
        test: /\.xml$/,
        exclude: /node_modules/,
        use: ['xml-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react'),
        },
      },
    ],
  },

  plugins: getPlugins(),
});
