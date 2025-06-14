const webpack = require('webpack')

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add fallback for Node.js core modules
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback, // Keep existing fallbacks if any
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "buffer": require.resolve("buffer"),
        "util": require.resolve("util"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url"),
        "path": require.resolve("path-browserify"),
        "zlib": require.resolve("browserify-zlib"),
        "vm": require.resolve("vm-browserify"),
        "fs": false, // Set to false if you're sure you don't need fs in the browser
        // Add other modules as they appear in your "Module not found" errors
      };

      // Add plugins for Buffer and process
      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser',
        }),
      ];

      return webpackConfig;
    },
  },
};