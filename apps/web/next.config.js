const withTM = require("next-transpile-modules")(["@rs-client/design-system"]);

module.exports = withTM({
  reactStrictMode: true,
});
