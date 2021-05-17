// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');

const webpackConfiguration = require('../webpack.config');
const environment = require('./env');

module.exports = merge(webpackConfiguration, {
    mode: 'development',

    // Gère le processus de génération des maps
    devtool: 'eval-source-map',

    // Serveur de développement
    devServer: {
        contentBase: environment.paths.output,
        watchContentBase: true,
        publicPath: '/',
        open: true,
        historyApiFallback: true,
        compress: true,
        overlay: true,
        hot: false,
        watchOptions: {
            poll: 300,
        },
        ...environment.server,
    },

    // Options de l'observateur de fichiers
    watchOptions: {
        aggregateTimeout: 300,
        poll: 300,
        ignored: /node_modules/,
    },

    // Configuration des plugins supplémentaires
    plugins: [],
});
