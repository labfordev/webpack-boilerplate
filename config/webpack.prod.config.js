// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const webpackConfiguration = require('../webpack.config');

module.exports = merge(webpackConfiguration, {
    mode: 'production',

    // Gère le processus de génération des maps
    devtool: false,

    // Configuration d'optimisation
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
            }),
            new CssMinimizerPlugin(),
        ],
    },

    // Valeurs de configuration du seuil de performance
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },

    // Configuration des plugins supplémentaires
    plugins: [],
});
