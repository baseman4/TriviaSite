/** @type {import('next').NextConfig} */

const withLess = require("next-with-less");
const nextConfig = withLess({
  reactStrictMode: true,
  swcMinify: true,
  webpack5: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config

    config.resolve.fallback = { fs: false };

    return config;
  },
})

module.exports = nextConfig
