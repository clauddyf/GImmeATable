var webpack = require("webpack");
const path = require('path');
module.exports = {
    context: __dirname,
    entry: './frontend/gimme_a_table.jsx', 
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    devtool: 'source-map'
};

// var path = require("path");
// var webpack = require("webpack");

// var plugins = []; // if using any plugins for both dev and production
// var devPlugins = []; // if using any plugins for development

// var prodPlugins = [
//   new webpack.DefinePlugin({
//     'process.env': {
//       'NODE_ENV': JSON.stringify('production')
//     }
//   }),
//   new config.optimization.minimize({
//     compress: {
//       warnings: true
//     }
//   })
// ];

// plugins = plugins.concat(
//   process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
// );

// module.exports = {
//     context: __dirname,
//     entry: './frontend/gimme_a_table.jsx', 
//     output: {
//         path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
//         filename: 'bundle.js'
//     },
// //   plugins: plugins,
//   module: {
//     loaders: [
//       {
//         test: [/\.jsx?$/, /\.js?$/],
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015', 'react']
//         }
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.json$/,
//         loader: "json-loader",
//       }
//     ]
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: [".js", ".jsx","*" ]
//   }
// };