const withTM = require('next-transpile-modules')(['antd', 'rc-util']); // Ant Design ve rc-util modüllerini transpile et

module.exports = withTM({
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
        path: false,
      };
    }
    return config;
  },
});
