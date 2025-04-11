// next.config.js
module.exports = {
    reactStrictMode: true,
    webpack(config, { isServer }) {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          module: false,
          path: false,
        };
      }
      return config;
    },
  };
  