/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ar", "tr", "ru", "ka", "zh"],
    defaultLocale: "en",
  },
  images: {
    domains: ["blog.develocity.app"],
  },
};

module.exports = nextConfig;
