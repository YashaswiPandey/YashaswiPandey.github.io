// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: true,
  webpack: (config) => {
    // Exclude LICENSE file from processing
    config.module.rules.push({
      test: /LICENSE$/,
      type: "asset/resource",
      generator: {
        filename: "static/[name][ext]",
      },
    });
    return config;
  },
};

module.exports = nextConfig;
