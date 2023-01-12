/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require("./framework/common/config");

const nextConfig = withFrameworkConfig({
  reactStrictMode: true,
  framework: {
    name: "shopify_local",
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US"
  }
});
module.exports = nextConfig

console.log("next.config.js", JSON.stringify(nextConfig, null, 2));
