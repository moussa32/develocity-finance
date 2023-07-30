/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["jsx", "js"],
  i18n: {
    locales: ["en", "ar", "tr", "ru", "ka", "zh"],
    defaultLocale: "en",
  },
  images: {
    domains: ["blog.develocity.app", "phplaravel-992545-3494971.cloudwaysapps.com"],
    formats: ["image/avif", "image/webp"],
  },
  topLevelAwait: true,
};

module.exports = withPlugins([withVideos], nextConfig);
