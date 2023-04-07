/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ar", "tr", "ru", "ka", "zh"],
    defaultLocale: "en",
  },
  images: {
    domains: ["blog.develocity.app"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = withPlugins([withVideos], nextConfig);
