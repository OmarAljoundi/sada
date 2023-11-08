/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  reactStrictMode: false,
  images: {
    loader: "custom",
    loaderFile: "./lib/supabase-image-loader.js",
  },
};

module.exports = nextConfig;
