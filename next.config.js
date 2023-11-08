/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  reactStrictMode: false,
  images: {
    loader: "custom",
    loaderFile: "./lib/supabase-image-loader.js",
    deviceSizes: [640, 750, 828, 1080],
  },
};

module.exports = nextConfig;
