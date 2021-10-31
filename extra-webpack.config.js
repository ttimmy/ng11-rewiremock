const webpack = require('webpack');

// Causes:
// WebpackOptionsValidationError: Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
module.exports = {
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new(require("rewiremock/webpack/plugin"))()
    ]
}