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
    domains: [
      "blog.develocity.app",
      "phplaravel-992545-3494971.cloudwaysapps.com",
      "phplaravel-1066800-3734034.cloudwaysapps.com",
      "https://blog.develocity.app",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = withPlugins([withVideos], nextConfig);
