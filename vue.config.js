const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');


module.exports = {
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin(),
            new ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
        ]
    },
    
  }

