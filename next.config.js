const withTM = require('next-transpile-modules')(['antd', 'rc-util']);

module.exports = withTM({
  reactStrictMode: true,
});
